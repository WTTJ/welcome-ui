/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'

const oldToNewIcons = {
  ActionsIcon: 'rocket',
  ActivityIcon: 'chart-line',
  AddIcon: 'plus',
  AddressIcon: 'sign-right',
  AirplayIcon: 'airplay',
  AlertIcon: 'exclamation-triangle',
  AlertOutlineIcon: 'exclamation-triangle',
  AnalyticsIcon: 'chart-pie',
  AnniversaryIcon: 'gift',
  ArchiveIcon: 'archive-alt',
  ArrowDownIcon: 'arrow-down',
  ArrowLeftIcon: 'arrow-left',
  ArrowLineDownIcon: 'arrow-to-bottom',
  ArrowLineLeftIcon: 'left-arrow-to-left',
  ArrowLineRightIcon: 'arrow-to-right',
  ArrowLineUpIcon: 'top-arrow-to-top',
  ArrowRightIcon: 'arrow-right',
  ArrowUpIcon: 'arrow-up',
  AspectRatioFillIcon: 'arrows-shrink-v',
  AspectRatioFitIcon: 'arrows-merge-v',
  AttachmentIcon: 'paperclip',
  AvatarIcon: 'user-circle',
  BarChartIcon: 'chart-bar',
  Basketballicon: 'basketball',
  BehanceIcon: 'behance',
  BirthdayIcon: 'birthday-cake',
  BoldIcon: 'bold',
  Book2Icon: 'book-alt',
  BookIcon: 'book-alt',
  BookmarkIcon: 'bookmark-solid',
  BookmarkOutlineIcon: 'bookmark',
  BulbIcon: 'lightbulb-alt',
  BulkIcon: 'apps',
  BuoyIcon: 'life-ring',
  BurnIcon: 'fire',
  CaddyIcon: 'shopping-cart',
  CalculIcon: 'calculator-alt',
  CameraIcon: 'camera',
  CameraOffIcon: 'video-slash',
  CameraOnIcon: 'video',
  CandidateStatusIcon: 'user-check',
  CardViewIcon: 'apps',
  CastConnectedIcon: 'cast-connected',
  CastIcon: 'cast',
  CastUnavailableIcon: 'cast-unavailable',
  CelebrateIcon: 'bunting-flags',
  CertifiedIcon: 'certified',
  CheckIcon: 'check',
  ClipboardIcon: 'clipboard-notes',
  ClockIcon: 'clock',
  CodeBlockIcon: 'brackets-curly',
  CodeIcon: 'arrow',
  CoffeeIcon: 'coffee',
  CollapseIcon: 'left-arrow-from-left',
  CommentIcon: 'comment-alt-lines',
  CommentOutlineIcon: 'comment-alt-lines',
  CommonAreaIcon: 'sofa',
  CompassIcon: 'ruler',
  ComputerIcon: 'desktop',
  ConnectionIcon: 'plug',
  ContractIcon: 'file-edit-alt',
  ControlBackwardIcon: 'step-forward',
  ControlForwardIcon: 'previous',
  ControlPauseIcon: 'pause-circle-solid',
  ControlStopIcon: 'stop-circle-solid',
  CopyIcon: 'copy',
  CoverLetterIcon: 'file-alt',
  CreateIcon: 'plus-circle',
  CreditCardIcon: 'credit-card',
  CrescentMoonIcon: 'moon-solid',
  CrescentMoonOutlineIcon: 'moon',
  CrossIcon: 'times',
  CrossTargetIcon: 'crosshair',
  CrownIcon: 'crown',
  CsvIcon: 'file',
  DateIcon: 'calendar',
  DepartmentIcon: 'users-alt',
  DetailsIcon: 'user-square',
  DiamondIcon: 'diamond',
  DishIcon: 'restaurant',
  DocIcon: 'file',
  DocxIcon: 'file',
  DownIcon: 'angle-down',
  DownloadIcon: 'import',
  DragAndDropIcon: 'draggable-dots',
  DribbleIcon: 'dribbble',
  EarthIcon: 'globe',
  EditIcon: 'pen',
  EducationLevelIcon: 'graduation-cap',
  Emailicon: 'envelope',
  EmailOutlineIcon: 'envelope',
  EotIcon: 'file',
  EqualIcon: 'equal-circle',
  EuroCurrencyIcon: 'euro-circle',
  ExpandIcon: 'arrow-from-right',
  ExpandTextIcon: 'resize-handle',
  ExtendIcon: 'arrow-resize-diagonal',
  ExternalLinkIcon: 'external-link-alt',
  FacebookIcon: 'facebook',
  FactoryIcon: 'industry',
  FemaleIcon: 'venus',
  FiltersIcon: 'filter',
  FingerprintIcon: 'fingerprint',
  FlagIcon: 'flag',
  FlagOutlineIcon: 'flag-solid',
  FlagPointedIcon: 'flag',
  FolderIcon: 'folder-open',
  FullscreenOffIcon: 'expand-arrows-alt',
  FullscreenOnIcon: 'compress-arrows',
  GearIcon: 'setting',
  GifIcon: 'file',
  GithubIcon: 'github',
  GoogleIcon: 'google',
  HandshakeIcon: 'handshake',
  HardHatIcon: 'hard-hat',
  HashtagIcon: 'hashtag',
  Heading1Icon: 'heading-1',
  Heading2Icon: 'heading-2',
  Heading3Icon: 'heading-3',
  Heading4Icon: 'heading-4',
  Heading5Icon: 'heading-5',
  Heading6Icon: 'heading-6',
  HeadingIcon: 'heading',
  HeadsetIcon: 'headphones',
  HeartIcon: 'heart-solid',
  HeartOutlineIcon: 'heart',
  HeartShinyIcon: 'heart',
  HideIcon: 'eye-slash',
  HomeIcon: 'estate',
  HouseIcon: 'estate',
  InformationIcon: 'info-circle',
  InformationOutlineIcon: 'info-circle',
  InProgressCandidateIcon: 'user-check',
  InstagramIcon: 'instagram',
  ItalicIcon: 'italic',
  JpegIcon: 'file',
  JpgIcon: 'file',
  JusticeHammerIcon: 'balance-scale',
  KanbanIcon: 'columns',
  KeyIcon: 'key-skeleton',
  LanguageIcon: 'english-to-chinese',
  LeafIcon: 'leaf',
  LeftIcon: 'angle-left-b',
  LineChartIcon: 'chart-line',
  LinkedinIcon: 'linkedin',
  LinkIcon: 'link',
  LocationIcon: 'map-marker-alt',
  LockIcon: 'lock-alt',
  LockRoundedIcon: 'lock-alt',
  LogOutIcon: 'sign-out-alt',
  MaleIcon: 'mars',
  MapIcon: 'map',
  Masonry2Icon: 'masonry-plus',
  MasonryIcon: 'masonry',
  MeetingRoomIcon: 'exit',
  MegaphoneIcon: 'megaphone',
  MentionIcon: 'at',
  MenuIcon: 'bars',
  MicIcon: 'microphone',
  MicrophoneOffIcon: 'microphone-slash',
  MicrophoneOnIcon: 'microphone',
  MicroshipIcon: 'processor',
  MobileIcon: 'mobile',
  MoneyIcon: 'euro-circle',
  MoreAndroidIcon: 'ellipsis-v',
  MoreIcon: 'ellipsis-h',
  MountainIcon: 'mountains',
  MoveIcon: 'move-arrow',
  NegativeIcon: 'sad-solid',
  NegativeOutlineIcon: 'sad',
  NegativeStraightIcon: 'sad',
  NewCandidateIcon: 'user-plus',
  NotificationIcon: 'bell',
  NpmIcon: 'npm',
  OfferStatusIcon: 'clipboard-check',
  OfficeIcon: 'building',
  OrderedListIcon: 'list-ol-alt',
  OrigineIcon: 'compass',
  PdfIcon: 'file',
  PencilIcon: 'pen',
  PhoneIcon: 'phone',
  PhoneOutlineIcon: 'phone',
  PicturesIcon: 'images',
  PiechartIcon: 'chart-pie-alt',
  PinIcon: 'pin',
  PinterestIcon: 'pinterest',
  PizzaIcon: 'pizza-slice',
  PlayIcon: 'play',
  PlaylistIcon: 'playlist',
  PlayOutlineIcon: 'play',
  PngIcon: 'file',
  PodcastIcon: 'microphone',
  PositiveIcon: 'smile-beam-solid',
  PositiveOutlineIcon: 'smile-beam',
  PositiveStraightIcon: 'smile-beam',
  PptIcon: 'file',
  PrintIcon: 'print',
  PromoteIcon: 'bolt-alt',
  PuzzleIcon: 'puzzle-piece-solid',
  PuzzleOutlineIcon: 'puzzle-piece',
  QuestionIcon: 'question-circle',
  QuestionsIcon: 'file-question-alt',
  QuoteIcon: 'quote',
  RefreshIcon: 'redo',
  RefuseCandidateIcon: 'user-times',
  RemoteIcon: 'house-user',
  RemoveIcon: 'minus',
  ResetIcon: 'redo',
  ResumeIcon: 'book-reader',
  ReviewIcon: 'star-solid',
  ReviewOutlineIcon: 'star',
  RightIcon: 'angle-right-b',
  SalaryIcon: 'coins',
  SaveIcon: 'save',
  ScreenshareOffIcon: 'screen-share',
  ScreenshareOnIcon: 'stop-screen-share',
  SearchIcon: 'search',
  SearchPeopleIcon: 'user-search',
  SettingsIcon: 'setting',
  Share1Icon: 'share-alt',
  Share2Icon: 'share',
  ShieldIcon: 'shield',
  ShowIcon: 'eye',
  SlackIcon: 'slack',
  SoundOffIcon: 'volume-mute',
  SoundOnIcon: 'volume-up',
  SourceIcon: 'file-search-alt',
  SpannerIcon: 'wrench',
  SparklesIcon: 'sparkles',
  SquareAlertIcon: 'exclamation-octagon',
  StackoverflowIcon: 'stackoverflow',
  StackserverIcon: 'server',
  StarIcon: 'star-solid',
  StarOutlineIcon: 'star',
  StrikethroughIcon: 'text-strike-through',
  SubtitlesIcon: 'closed-captioning',
  SuccessIcon: 'check-circle',
  SuitcaseIcon: 'bag-alt',
  SunIcon: 'sun',
  SvgIcon: 'file',
  TableColumnAddAfterIcon: 'columns',
  TableColumnAddBeforeIcon: 'columns',
  TableColumnRemoveIcon: 'columns',
  TableDeleteIcon: 'trash',
  TableDivideIcon: 'table',
  TableIcon: 'table',
  TableMergeCellsIcon: 'table',
  TableRowAddAboveIcon: 'table',
  TableRowAddBelowIcon: 'table',
  TableRowRemoveIcon: 'table',
  TabletIcon: 'tablet',
  TagIcon: 'tag-alt',
  TargetIcon: 'hunting',
  TeepeeIcon: 'estate',
  ThumbDownIcon: 'thumbs-down',
  ThumbUpIcon: 'thumbs-up',
  ThunderclockIcon: 'clock',
  TiktokIcon: 'tiktok',
  TrashIcon: 'trash',
  TreeIcon: 'trees',
  TrophyIcon: 'trophy',
  TtfIcon: 'file',
  TwitchIcon: 'twitch',
  TxtIcon: 'file',
  TypeIcon: 'font',
  UnavailableIcon: 'ban',
  UnderlineIcon: 'underline',
  UnorderedListIcon: 'list-ul',
  UpdateIcon: 'pen',
  UpIcon: 'angle-up',
  UploadIcon: 'upload',
  UserIcon: 'user-circle',
  UserOutlineIcon: 'user-circle',
  VideoCamera2Icon: 'video',
  VideoCameraIcon: 'video',
  VideoIcon: 'play',
  WatchLaterIcon: 'history',
  Woff2Icon: 'file',
  WoffIcon: 'file',
  WriteIcon: 'illustration',
  XIcon: 'x',
  XingIcon: 'xing',
  XlsIcon: 'file',
  XlsxIcon: 'file',
  YoutubeIcon: 'youtube',
  ZapierIcon: 'zapier',
  ZipIcon: 'file',
}

function findUnmappedIcons(code) {
  // Regex to find all icon components (ending with Icon)
  const iconRegex = /<(\w*Icon)\s+/g
  const unmapped = new Set()
  let match

  while ((match = iconRegex.exec(code)) !== null) {
    const iconName = match[1]
    // eslint-disable-next-line no-prototype-builtins
    if (!oldToNewIcons.hasOwnProperty(iconName)) {
      unmapped.add(iconName)
    }
  }

  return Array.from(unmapped)
}

function migrateCode(code) {
  let result = code
  let replacedCount = 0
  let importsUpdated = 0
  let importReplaced = false
  const unmappedIcons = findUnmappedIcons(code)

  // 1. Replace icon components with <Icon name="..." />
  Object.entries(oldToNewIcons).forEach(([oldName, newName]) => {
    // Regex for self-closing tags
    const selfClosingRegex = new RegExp(`<${oldName}\\s+([^/>]*)\\s*/?>`, 'g')
    const matches = result.match(selfClosingRegex)
    if (matches) {
      replacedCount += matches.length
      result = result.replace(selfClosingRegex, (match, props) => {
        const propsStr = props.trim()
        return `<Icon name="${newName}"${propsStr ? ' ' + propsStr : ''} />`
      })
    }

    // Regex for non-self-closing tags
    const openingRegex = new RegExp(`<${oldName}\\s+([^>]*)>([^<]*)<\\s*/${oldName}\\s*>`, 'g')
    const openingMatches = result.match(openingRegex)
    if (openingMatches) {
      replacedCount += openingMatches.length
      result = result.replace(openingRegex, (match, props, content) => {
        const propsStr = props.trim()
        return `<Icon name="${newName}"${propsStr ? ' ' + propsStr : ''}>${content}</Icon>`
      })
    }
  })

  // 2. Update imports (match both 'welcome-ui/Icon' and 'welcome-ui/Icons')
  const oldIconNames = Object.keys(oldToNewIcons).join('|')
  const importRegex = new RegExp(
    `import\\s*\\{\\s*([^}]*(${oldIconNames})[^}]*)\\s*\\}\\s*from\\s*['"]welcome-ui/Icons?['"];?`,
    'g'
  )

  const importMatches = result.match(importRegex)
  if (importMatches) {
    importReplaced = true
    importsUpdated = importMatches.length
    result = result.replace(importRegex, () => {
      return `import { Icon } from 'welcome-ui/Icon'`
    })
  }

  // 3. Add Icon import if it doesn't exist and there are replacements
  if (
    replacedCount > 0 &&
    !importReplaced &&
    !result.includes('import { Icon }') &&
    !result.includes("from 'welcome-ui/Icon'")
  ) {
    const firstImportIndex = result.search(/import\s+/)
    if (firstImportIndex !== -1) {
      result = `import { Icon } from 'welcome-ui/Icon'\n${result}`
      importsUpdated++
    }
  }

  // 4. Clean up malformed imports (extra commas, empty spaces)
  result = result.replace(/import\s*\{\s*Icon\s*,\s*\}\s*from/g, 'import { Icon } from')
  result = result.replace(/import\s*\{\s*Icon\s*,\s+\}\s*from/g, 'import { Icon } from')

  return { importsUpdated, replacedCount, result, unmappedIcons }
}

function processDirectory(dirPath, extensions = ['.jsx', '.js', '.tsx', '.ts']) {
  let totalReplaced = 0
  let totalImports = 0
  let filesProcessed = 0
  const allUnmappedIcons = new Set()

  function walk(dir) {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        // Ignore node_modules and .git
        if (!file.startsWith('.') && file !== 'node_modules') {
          walk(filePath)
        }
      } else if (extensions.includes(path.extname(file))) {
        const result = processFile(filePath)
        if (result) {
          totalReplaced += result.replaced
          totalImports += result.imports
          filesProcessed++
          result.unmapped.forEach(icon => allUnmappedIcons.add(icon))
        }
      }
    })
  }

  walk(dirPath)
  return {
    filesProcessed,
    totalImports,
    totalReplaced,
    unmappedIcons: Array.from(allUnmappedIcons),
  }
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { importsUpdated, replacedCount, result, unmappedIcons } = migrateCode(content)

    if (replacedCount > 0 || importsUpdated > 0) {
      fs.writeFileSync(filePath, result, 'utf-8')
      console.log(`✅ ${filePath}`)
      console.log(`   → ${replacedCount} components replaced, ${importsUpdated} imports updated`)
      if (unmappedIcons.length > 0) {
        console.log(`   ⚠️  Unmapped icons found: ${unmappedIcons.join(', ')}`)
      }
      return { imports: importsUpdated, replaced: replacedCount, unmapped: unmappedIcons }
    }
    return null
  } catch (error) {
    console.error(`❌ Error with ${filePath}:`, error.message)
    return null
  }
}

// Main
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log('Usage: node migrate-icons.js <file-or-directory> [file-or-directory] ...')
  console.log('')
  console.log('Examples:')
  console.log('  node migrate-icons.js ./src')
  console.log('  node migrate-icons.js ./src/components/Button.jsx')
  console.log('  node migrate-icons.js ./src ./components')
  process.exit(1)
}

let globalStats = { filesProcessed: 0, totalImports: 0, totalReplaced: 0, unmappedIcons: new Set() }

args.forEach(arg => {
  const resolvedPath = path.resolve(arg)

  if (!fs.existsSync(resolvedPath)) {
    console.error(`❌ Path not found: ${resolvedPath}`)
    return
  }

  const stat = fs.statSync(resolvedPath)

  if (stat.isDirectory()) {
    console.log(`\n📁 Processing directory: ${resolvedPath}`)
    const result = processDirectory(resolvedPath)
    globalStats.filesProcessed += result.filesProcessed
    globalStats.totalReplaced += result.totalReplaced
    globalStats.totalImports += result.totalImports
    result.unmappedIcons.forEach(icon => globalStats.unmappedIcons.add(icon))
  } else if (stat.isFile()) {
    console.log(`\n📄 Processing file: ${resolvedPath}`)
    const result = processFile(resolvedPath)
    if (result) {
      globalStats.filesProcessed++
      globalStats.totalReplaced += result.replaced
      globalStats.totalImports += result.imports
      result.unmapped.forEach(icon => globalStats.unmappedIcons.add(icon))
    }
  }
})

console.log('\n' + '='.repeat(60))
console.log(`📊 Summary:`)
console.log(`   Files processed: ${globalStats.filesProcessed}`)
console.log(`   Components replaced: ${globalStats.totalReplaced}`)
console.log(`   Imports updated: ${globalStats.totalImports}`)
if (globalStats.unmappedIcons.size > 0) {
  console.log(`\n⚠️  Unmapped icons found (${globalStats.unmappedIcons.size}):`)
  Array.from(globalStats.unmappedIcons)
    .sort()
    .forEach(icon => {
      console.log(`   - ${icon}`)
    })
}
console.log('='.repeat(60))
