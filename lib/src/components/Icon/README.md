# 🎨 How to Generate a New Sprite When You Want to Add a New Icon

## 📖 Introduction

We are using the **unicons** library for our icons. It provides:

- 💎 A paying set of icons called `solid`
- 🆓 A free one called `line`

Welcome-ui being an open-source project, we can't expose the `solid` icons sprite. This is why we have moved the icon generation to the `front` private repository. It generates:

- A sprite containing **free icons** in this repository, OR
- A **production sprite** in the `front` repository containing all icons (free + paying + custom, etc.)

---

## ➕ Add a New Icon

To add a new icon to the sprite, you have to:

1. **Add the icon name** to the `icons.json` file located in `lib/src/components/Icon/icons.ts` in the corresponding array (arrows, actions, chat, miscellaneous, etc.)

2. **Generate all sprites:**

   ### 🌐 For Welcome-UI website (free icons only)

   After making sure you are in the correct branch of the `front` repo, run:

   ```bash
   yarn sprite
   ```

   This command will create a sprite for welcome-ui website with free icons only.

   ### 🚀 For production (all icons: free + paying + custom)

   Run the following command:

   ```bash
   yarn sprite --prod
   ```

   This command will create a production-ready sprite for WTTJ internal usage with all icons.

3. **Commit and push** the changes to both `front` and `welcome-ui` repositories.

---

## 👀 See Production Sprite Icons Locally

If you want to see the production sprite icons locally, follow these steps:

1. Go to the `website/build-app/components/Header/index.tsx` file
2. Comment/uncomment the lines related to the Sprite import depending on the sprite you want to use (production or welcome-ui), as explained in the comments of the file

---

> **💡 Note:** Make sure you're on the correct branches before running the sprite generation commands.
