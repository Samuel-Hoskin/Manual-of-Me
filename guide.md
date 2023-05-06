---
layout: page
title: Guide
description: How to create your own manual of me on this site.
---

<strong class="govuk-tag govuk-tag--red"> Warning </strong> This site is a work in progress. If you encounter any issues please let [Sam](https://twitter.com/Samuel_Hoskin) know.


This site is built on markdown files and majority of content all in simple frontmatter. If that does not make sense, that is fine you don't need to know the technology to follow along.

By the end this you will have created a file using the below that will used to make your manual:
```YAML
---
layout: manual
tag: manual
title: Joe Blogs
#Short Bio 
description: 
#Bio
bio: 
#Updated Date
date: git Last Modified
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

You will need a [GitHub](https://github.com) Account to add your own manual. If you do not have a account you can [sign up](https://github.com/signup) for one. Follow GitHub's [Sign Up Guide](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account#signing-up-for-a-new-account) if you are unsure how.

Once logged in, navigate to the site's [GitHub Repository](https://github.com/Samuel-Hoskin/Manual-of-Me), click "Add file" and then name the file `[YourNameHere].md`(Note: No spaces within the file name). Copy the above codeblock in to the file.

Edit `title: Joe Blogs` to reflect your name

If you wish to include a photo, paste in a link to a publicly accessible photo of yourself. If not you can leave this blank
```yaml
photo:
  - link: [Your Photo Link here (Inc https://)]
    alt: [text describing the image for those using screen readers] 
```
For each of the questions, you can choose whether to answer and include it in your manual. Lets take `# How I learn best`. For each bullet point answer you want to give, enter, tab and dash. You should end up with something looking like the below
```yaml
# How I learn best
Learn:
    - [Bullet Point 1]
    - [Bullet Point 2]
    - [Bullet Point 3]

```

[GIF Advice]
```yaml
# If I were an animated gif/meme, I would be...
Gif:
  - link: 
    alt: 
```

Once you are happy with your answers, click `Propose New File`. Then on the next page click `Create Pull Request` then click on it again. 

If you are unsure what a pull request is, simply put it is a proposal to upload your changes to the repo and there for this site. If you want to learn more about pull requests and git [... you can find out more here etc ] 

Once you have proposed your manuel, you will need to wait for [Sam](https://twitter.com/Samuel_Hoskin) to approve it's addition to the site.

Once approved, the site will rebuild and you will be able to access your manuel at https://manual-of.me/[YourFilenameHere].

## Edit your manuel

So you have made a mistake or need to change something in your manuel,no worries.

Navigate to the [GitHub Repository](https://github.com/Samuel-Hoskin/Manual-of-Me), and then click on your name/file. Once opened, click on pen/edit button and edit away!

Once complete with your changes, click `propose changes`, then `Create Pull Request` then click  it again.

This will again need await approval before being reflected at on the site.

