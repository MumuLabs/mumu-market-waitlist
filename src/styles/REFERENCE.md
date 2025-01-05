# Stylesheets for Mumu Waitlist

This directory, aka `src/styles` will contain some of the custom styles for
Mumu Waitlist that include but is not limited to the following:
- Custom fonts for the website: `src/styles/fonts.css`
- Custom color preferences for the website: `src/styles/colors.css`
- Any other custom styles that are specific to the website.

## How Importing Styles Works

When it comes to Tailwind CSS, you can import custom styles from any
directory in your globals.css file by using the `@import` statement.

For example, if you wanted to import the `colors.css` file, you would do the
following:

```css
@import "./src/styles/colors.css";
```

## How Will This Be Used?

This directory will contain custom `.css` files and will be imported into the
`globals.css` file in the `src` directory to make it available to all of the
components and pages in the project.