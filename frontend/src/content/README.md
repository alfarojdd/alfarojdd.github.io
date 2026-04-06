# Content Map

Edit section content here instead of touching React components.

- `site/`
  - `personalData.js`: hero/header identity, links, hero image, profile image and status.
  - `navigationItems.js`: bottom navigation entries.
- `hero/`
  - `systemsOnline.js`: items and percentages for "SYSTEMS ONLINE".
  - `latestLogs.js`: lines shown in "LATEST LOG".
  - `featuredProject.js`: selects which mission appears as featured in the hero.
- `about/`
  - `story.js`: "MY STORY" paragraphs.
  - `systemInfo.js`: terminal-style system info block.
  - `coreTechnologies.js`: list for "CORE TECHNOLOGIES".
- `missions/`
  - `items/`: one file per mission card.
- `logbook/`
  - `posts/`: one file per logbook post.
- `repositories/`
  - `items/`: one file per repository card.
- `journey/`
  - `entries/`: one file per journey entry.

To add a new mission, logbook post, repository or journey entry:

1. Create a new file in that section's `items/`, `posts/` or `entries/` folder.
2. Export the object as default.
3. Import it in that section's `index.js` and add it to the exported array.

Profile photo:

1. Put your image in `frontend/public/images/profile/`.
2. Set `profileImage` in `site/personalData.js`, for example `"/images/profile/juan-profile.jpg"`.
3. If `profileImage` is empty, the header falls back to your initials.
