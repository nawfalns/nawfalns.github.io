# Your portfolio: how to put it online and add things

Your portfolio is a website. When it's online it gets a link like
**https://nawfalns.github.io**. You put that link on your CV and LinkedIn,
and anyone who clicks it sees your portfolio. Nobody downloads anything.

---

## Part 1: Put it online (one time, about 10 minutes)

1. Go to **github.com** and sign in.
2. Click the **+** at the top right, then **New repository**.
3. In "Repository name" type exactly: **nawfalns.github.io**
4. Choose **Public**, then click **Create repository**.
5. On the next page click **uploading an existing file**.
6. Unzip the folder I sent you. Drag **everything inside it** onto the page
   (index.html, style.css, app.js, content.js and the images folder).
7. Click **Commit changes** at the bottom.
8. Go to **Settings → Pages**. Under "Branch" choose **main**, then **Save**.
9. Wait 1 to 2 minutes, then open **https://nawfalns.github.io**. That's your portfolio.

**Add the link everywhere:**
- CV: next to your LinkedIn link, write `Portfolio: nawfalns.github.io`
- LinkedIn: on your profile click **Add section → Featured → Add a link** and paste it.
- LinkedIn: **Edit intro → Website** and paste it.

---

## Part 2: Add things in future

You only ever edit **one file: content.js**. You can edit it right on GitHub:

1. Open your **nawfalns.github.io** repository on GitHub.
2. Click **content.js**, then the **pencil icon** (Edit).
3. Make your change (see examples below).
4. Click **Commit changes**. Your website updates in about 1 minute.

### Add a video to a project
1. Upload the video to **YouTube**. You can set it to **Unlisted** so only people with the link can see it.
2. On YouTube click **Share**, then **Copy**.
3. In content.js, find the project and paste the link between the quotes:
   `video: "https://youtu.be/abc123XYZ",`

The video plays inside your portfolio when someone opens the project.

### Add an intro video about yourself
Paste a YouTube link in `introVideo: ""` near the top of content.js.
It replaces the chart in the top section of the page.

### Add a new project
Copy one whole project block, from `{` to `}`, and paste it below the last one.
Put a **comma** between the blocks. Then change the text. Example:

```js
    },
    {
      tool: "Power BI",
      title: "Sales dashboard for a retail chain",
      where: "Personal project · 2026",
      summary: "One or two sentences about the problem and what you built.",
      tags: ["Power BI", "DAX", "Power Query"],
      video: "https://youtu.be/abc123XYZ",
      dashboard: "",
      code: "https://github.com/nawfalns/sales-dashboard",
      post: "",
      images: ["images/sales-1.png", "images/sales-2.png"],
      results: ["Found that 3 regions made 70% of revenue"],
      learnings: ["Built a star schema data model", "Wrote DAX measures for YoY growth"],
      codeSnippet: ""
    }
```

### Add screenshots or images
1. In your repository, click the **images** folder, then **Add file → Upload files**.
2. Upload the picture and click **Commit changes**.
3. In content.js write its name, e.g. `images: ["images/sales-1.png"],`

### Add a live Power BI dashboard
In Power BI Service, use **File → Embed report → Publish to web (public)**, copy the link,
and paste it in `dashboard: ""`. Only do this with data that's fine to make public.

### Show some code
Paste a short piece of code between backticks in `codeSnippet`, e.g.
```js
      codeSnippet: `SELECT region, SUM(sales) AS total
FROM orders
GROUP BY region;`
```

### Add a certificate
Upload the certificate image to the **images** folder, then copy a certificate block in content.js:
```js
    },
    {
      title: "Power BI Data Analyst",
      issuer: "Microsoft",
      date: "Mar 2026",
      image: "images/powerbi-cert.png",
      link: "https://link-to-verify"
    }
```

### Add your photo or CV
- Photo: upload `me.jpg` to images, then set `photo: "images/me.jpg",`
- CV: upload your CV PDF to images, then set `resume: "images/Nawfal-Khan-CV.pdf",`
  A Resume button then appears at the top of the page.

### New job or skill
Edit the `experience`, `keySkills`, `toolSkills` lists in the same way.

---

## If the page goes blank after an edit
It's almost always a missing comma or quote. On GitHub, open content.js, click
**History**, open your last good version, and copy it back. Or check that:
- every block ends with `},`
- all text is inside `"quotes"`
- every `[` has a matching `]` and every `{` a matching `}`
