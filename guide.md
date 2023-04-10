---
layout: page
title: Guide
description: How to create your own manual of me on this site.
---


This site is built on markdown files and majority of content all in simple frontmatter. If that does not make sense, that is fine you don't need to know the technology to follow along.

By the end this you will have created a file using the below that will used to make your manual:
```YAML
---
layout: manual
tag: manual
title: Joe Blogs 
photo:
  - link: 
    alt: 

# Conditions I like to work in
Conditions:

# Times / hours I like to work
Time:

# Best ways to communicate with me
Communicate:

# How I best receive feedback
Feedback:

# Things I need
Need:

# How I learn best
Learn:

# Things I struggle with
Struggle:

# Things I love
Love:

# Other things to know about me
Other:

# If I were an animated gif/meme, I would be...
Gif:
  - link: 
    alt: 

---
```

So first navigate to the GitHub Repository, click "Add file" and then name the file `[YourNameHere].md`. Copy the above codeblock in to the file.

Edit `title: Joe Blogs` to reflect your name

If you wish to include a photo, paste in a link to a publicly accessible photo of yourself 
```yaml
photo:
  - link: [Your Photo Link here (Inc https://)]
    alt: [text describing the image for those using screen readers] 
```
For each of the question, you can choose weather to  answer and include in your manual. Lets take `# How I learn best`. For each bullet point answer you want to give, enter ,tab dash
```yaml
# How I learn best
Learn:
    - [Bullet Point 1]
    - [Bullet Point 2]
    - [Bullet Point 3]

```