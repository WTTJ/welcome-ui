/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

/**
 * Script de migration des icônes IconsFont vers welcome-ui/Icon
 * Usage: node migrate-icons.js [chemin-du-repo]
 */

class IconMigrator {
  constructor(rootPath = '.') {
    this.rootPath = path.resolve(rootPath)
    this.processedFiles = 0
    this.modifiedFiles = 0
    this.errors = []
  }

  /**
   * Ajoute les nouveaux imports d'icônes
   */
  addNewIconImports(content, iconNames) {
    if (iconNames.length === 0) {
      return content
    }

    // Créer les noms des composants d'icônes et les trier
    const iconComponentNames = iconNames.map(name => `${name}Icon`).sort()

    // Créer la ligne d'import
    const newImport = `import { ${iconComponentNames.join(', ')} } from 'welcome-ui/Icons'\n`

    // Trouver où insérer l'import (après les autres imports)
    const lines = content.split('\n')
    let insertIndex = 0

    // Chercher la dernière ligne d'import
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line.startsWith('import ') && line.includes('from ')) {
        insertIndex = i + 1
      } else if (line === '' && insertIndex > 0) {
        // Ligne vide après les imports
        break
      } else if (line !== '' && insertIndex > 0) {
        // Première ligne non-vide après les imports
        break
      }
    }

    // Si aucun import trouvé, insérer au début
    if (insertIndex === 0) {
      return newImport + '\n' + content
    }

    // Insérer l'import à la position trouvée
    lines.splice(insertIndex, 0, newImport.trimEnd())
    return lines.join('\n')
  }

  /**
   * Extrait tous les noms d'icônes utilisés dans le fichier
   */
  extractIconNames(content) {
    const iconRegex = /<IconsFont\.(\w+)(?:\s|\/|>)/g
    const iconNames = new Set()
    let match

    while ((match = iconRegex.exec(content)) !== null) {
      iconNames.add(match[1])
    }

    return Array.from(iconNames)
  }

  /**
   * Vérifie si un fichier est un fichier React
   */
  isReactFile(fileName) {
    return /\.(jsx?|tsx?)$/.test(fileName)
  }

  /**
   * Point d'entrée principal
   */
  async migrate() {
    console.log(`🚀 Début de la migration des icônes dans: ${this.rootPath}`)
    console.log('─'.repeat(60))

    try {
      await this.processDirectory(this.rootPath)
      this.printSummary()
    } catch (error) {
      console.error('❌ Erreur lors de la migration:', error.message)
      process.exit(1)
    }
  }

  /**
   * Affiche le résumé de la migration
   */
  printSummary() {
    console.log('\n' + '='.repeat(60))
    console.log('📊 RÉSUMÉ DE LA MIGRATION')
    console.log('='.repeat(60))
    console.log(`📁 Fichiers traités: ${this.processedFiles}`)
    console.log(`✏️  Fichiers modifiés: ${this.modifiedFiles}`)
    console.log(`❌ Erreurs: ${this.errors.length}`)

    if (this.errors.length > 0) {
      console.log('\n🚨 ERREURS RENCONTRÉES:')
      this.errors.forEach(error => console.log(`   • ${error}`))
    }

    if (this.modifiedFiles > 0) {
      console.log('\n✅ Migration terminée avec succès!')
      console.log("💡 N'oubliez pas de vérifier que tout fonctionne correctement")
      console.log('💡 et de faire les ajustements manuels si nécessaire.')
    } else {
      console.log('\n💭 Aucun fichier à migrer trouvé.')
    }
  }

  /**
   * Traite récursivement un répertoire
   */
  async processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name)

      if (entry.isDirectory()) {
        // Ignorer node_modules, .git, build, dist, etc.
        if (this.shouldSkipDirectory(entry.name)) {
          continue
        }
        await this.processDirectory(fullPath)
      } else if (entry.isFile() && this.isReactFile(entry.name)) {
        await this.processFile(fullPath)
      }
    }
  }

  /**
   * Traite un fichier individuel
   */
  async processFile(filePath) {
    this.processedFiles++

    try {
      const content = fs.readFileSync(filePath, 'utf8')
      const relativePath = path.relative(this.rootPath, filePath)

      // Vérifier si le fichier contient des imports IconsFont
      if (!content.includes('IconsFont')) {
        return
      }

      console.log(`📝 Traitement: ${relativePath}`)

      const modifiedContent = this.transformFileContent(content)

      if (modifiedContent !== content) {
        fs.writeFileSync(filePath, modifiedContent, 'utf8')
        this.modifiedFiles++
        console.log(`✅ Modifié: ${relativePath}`)
      }
    } catch (error) {
      const errorMsg = `Erreur lors du traitement de ${filePath}: ${error.message}`
      this.errors.push(errorMsg)
      console.error(`❌ ${errorMsg}`)
    }
  }

  /**
   * Supprime l'import IconsFont
   */
  removeIconsFontImport(content) {
    // Supprimer les imports IconsFont (plusieurs variantes possibles)
    const importRegexes = [
      /import\s*{\s*IconsFont\s*}\s*from\s*['"]welcome-ui\/IconsFont['"];?\s*\n?/g,
      /import\s*{\s*IconsFont\s*}\s*from\s*['"]welcome-ui\/IconsFont['"];?\s*\r?\n?/g,
    ]

    let result = content
    importRegexes.forEach(regex => {
      result = result.replace(regex, '')
    })

    return result
  }

  /**
   * Remplace tous les usages d'icônes
   */
  replaceIconUsages(content, iconNames) {
    let result = content

    iconNames.forEach(iconName => {
      const iconComponentName = `${iconName}Icon`
      // Remplacer <IconNameIcon par <IconNameIcon
      // eslint-disable-next-line no-useless-escape
      const usageRegex = new RegExp(`<IconsFont\\.${iconName}(?=\\s|\/|>)`, 'g')
      result = result.replace(usageRegex, `<${iconComponentName}`)
    })

    return result
  }

  /**
   * Vérifie si un répertoire doit être ignoré
   */
  shouldSkipDirectory(dirName) {
    const skipDirs = [
      'node_modules',
      '.git',
      'build',
      'dist',
      '.next',
      'coverage',
      '__tests__',
      '.storybook',
    ]
    return skipDirs.includes(dirName) || dirName.startsWith('.')
  }

  /**
   * Transforme le contenu d'un fichier
   */
  transformFileContent(content) {
    // Étape 1: Extraire tous les noms d'icônes utilisés
    const iconNames = this.extractIconNames(content)

    if (iconNames.length === 0) {
      return content
    }

    // Étape 2: Supprimer l'import IconsFont
    let transformedContent = this.removeIconsFontImport(content)

    // Étape 3: Remplacer les usages d'icônes
    transformedContent = this.replaceIconUsages(transformedContent, iconNames)

    // Étape 4: Ajouter le nouvel import
    transformedContent = this.addNewIconImports(transformedContent, iconNames)

    return transformedContent
  }
}

// Exécution du script
async function main() {
  const args = process.argv.slice(2)
  const targetPath = args[0] || '.'

  if (!fs.existsSync(targetPath)) {
    console.error(`❌ Le chemin "${targetPath}" n'existe pas.`)
    process.exit(1)
  }

  const migrator = new IconMigrator(targetPath)
  await migrator.migrate()
}

// Vérifier si le script est exécuté directement
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('❌ Erreur fatale:', error)
    process.exit(1)
  })
}

export { IconMigrator }
