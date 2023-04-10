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
For each of the question, you can choose weather to  answer and include in your manual. Lets take `# How I learn best`. For each bullet point answer you want to give, enter, tab and dash. You should end up with something looking like the below
```yaml
# How I learn best
Learn:
    - [Bullet Point 1]
    - [Bullet Point 2]
    - [Bullet Point 3]

```


## Custom Responses
Want to add your own questions/responses to your manual, let's show you how.

After you have created a markdown file following the above, copy the following underneath the `---`, you can then amend `[Custom Statement 1]` to be your statement. Copy the `<li> Item One </li>` for as many responces you want to give
```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
  <h2 class="govuk-heading-m">[Custom Statement 1]</h2>
    <ul class="govuk-list govuk-list--bullet">   
      <li> Item One </li>
    </ul>
  </div>

  <div class="govuk-grid-column-one-third">
  <h2 class="govuk-heading-m">[Custom Statement 2]</h2>
    <ul class="govuk-list govuk-list--bullet">   
      <li> Item One </li>
    </ul>
  </div>
</div>
```