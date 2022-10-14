# Team Fudan 2022 Wiki
ID 4162

## Rester: A Vitamin A Biomanufacturing Cell Factory for Skincare Products

Our society has been under massive academic and work pressure recently. However, as the most exterior health indicator, skin loses the care that it should have according to research indicating that over 40% of people have worsened skin health due to a work-life imbalance and a lack of skincare awareness during the pandemic. Our project Rester centers on Vitamin A, an effective skincare reagent but with possible side effects. Our modified cell factories featuring phase separation and enzyme anchoring contain the reaction route of beta-carotene, retinal, and retinol through consecutive enzymatic reactions with appropriate efficiency. It would underlie the production of Vitamin A derivatives that overcome the instability and hazard issues of typical Vitamin A forms in skincare products. This biomanufacturing plan helps people with heavy stress and skincare queries raise their proper skincare awareness, ease their financial burden of skincare, and ultimately regain confidence in their careers and life.

# Code validation
* semistandard \*.js
* https://html5.validator.nu
* https://jigsaw.w3.org/css-validator/

# Note from HQ

This repository **MUST** contain all coding assets to generate your team's wiki (HTML, CSS, JavaScript, TypeScript, Python, etc).

Images, photos, icons and fonts **MUST** be stored on `static.igem.wiki` using [uploads.igem.org](https://uploads.igem.org), and Videos **must** be embedded from [iGEM Video Universe](https://video.igem.org).

For up-to-date requirements, resources, help and guidance, visit [competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki).

## Getting started

You should probably only edit the files inside folders `static`, `wiki` and `wiki > pages`.
1. Open the Web IDE
1. Make the changes on the files you wish:
    * For the menu, change the file [menu.html](wiki/menu.html)
    * For the layout, change the file [layout.html](wiki/layout.html)
    * For the pages, change the corresponding file in the foler [pages](wiki/pages)
1. Review the changes you made
1. Once you are done, save the changes by **committing** them to the *main branch* of the repository
1. An automated script will build, test and deploy your wiki, which should take less than 30 seconds.

## About this Template

### Files

The static assets are in the `static` directory. The layout and templates are in the `wiki` directory, and the pages live in the `wiki > pages` directory. Unless you are an experienced and/or adventurous human, you probably shouldn't change other files.

    |__ static/             -> static assets (CSS and JavaScript files only)
    |__ wiki/               -> Main directory for the pages and layouts
        |__ footer.html     -> Footer that will appear in all the pages
        |__ layout.html     -> Main layout of your wiki. All the pages will follow its structure
        |__ menu.html       -> Menu that will appear in all the pages
        |__ wiki-tools.html -> Wiki tools to help getting started with this template
        |__ pages/          -> Directory for all the pages
            |__ *.html      -> Actual pages of your wiki
    |__ .gitignore          -> Tells GitLab which files/directories should not be uploaded to the repository
    |__ .gitlab-ci.yml      -> Automated flow for building, testing and deploying your website.
    |__ LICENSE             -> License CC-by-4.0, all wikis are required to have this license - DO NOT MODIFY
    |__ README.md           -> File containing the text you are reading right now
    |__ app.py              -> Python code managing your wiki
    |__ dependencies.txt    -> Software dependencies from the Python code

### Technologies

  * [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
  * [Python](https://www.python.org): Programming language
  * [Flask](https://palletsprojects.com/p/flask/): Python framework
  * [Fronzen-Flask](https://pythonhosted.org/Frozen-Flask): Library that builds the wiki to be deployed as a static website
  * [Bootstrap](https://getbootstrap.com/docs/5.0/components): CSS and JS components used

### Building locally (advanced users)

To work locally with this project, you'll have to follow the steps below:

#### Install
```bash
git clone https://gitlab.igem.org/2022/fudan
cd fudan
python3 -m venv venv
. venv/bin/activate
pip install -r dependencies.txt
```

#### Execute
```bash
python app.py
```
