var md = require('markdown-it')();

// = defaultMeta
// || this.defaultMeta.lang
module.exports = {
  generatePage: function(pageContent, pageMeta, pageData){
    
    var catogory = pageData.catogory;
                var catogoryString = catogory.join();
                var catogoryStringReady = catogoryString.split(',').join(', ');

    return`<!DOCTYPE html>
<html lang="${pageMeta.lang}">
  <head>
    <title>${pageMeta.title}</title>
    <meta charset="${pageMeta.charset}">
    <meta name="description" content="${pageMeta.description}">
    <meta name="keywords" content="${pageMeta.keywords}">
    <meta name="author" content="${pageMeta.author}">
    ${
      pageMeta.hasOwnProperty('extra')
        ?pageMeta.extra.length
          ? pageMeta.extra.map(value => `<meta ${value}>`)
          : ''
        :''
    }
    <meta name="description" content="${pageMeta.description}">
    ${
      pageMeta.hasOwnProperty('stylesheets')
        ?pageMeta.stylesheets.length
          ?pageMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
          :''
        :''
    }
    ${
      pageMeta.hasOwnProperty('scripts')
        ?pageMeta.scripts.length
          ?pageMeta.scripts.map(value => `<script src="${value}"></script>`)
          :''
        :''
    }
    <link rel="icon" type="image/png" href="${pageMeta.favicon}">


    <link href="../assets/style/modal.css" rel="stylesheet" type="text/css">
    <link href="../assets/style/page.css" rel="stylesheet" type="text/css">
    <link href="../assets/style/style.css" rel="stylesheet" type="text/css">
    <link href="../assets/fonts/museo-sans/stylesheet.css" rel="stylesheet" type="text/css">
    <link href="../assets/script/lib/nav/demo.css" rel="stylesheet" type="text/css">
    <link href="../assets/script/lib/nav/style12.css" rel="stylesheet" type="text/css">
    <script src="../assets/script/lib/nav/snap.svg-min.js">
    </script>
    <script src="../assets/script/lib/nav/modernizr.custom.js">
    </script>

  </head>
  <body>
    <header id="header">
        <a href="../index.html" id="logo"><img id="logo-desktop" src="../assets/images/logo-white.svg"> <img id="logo-mobile" src="../assets/images/logo-short-white.svg"></a>
        <ul id="menu">
            <li class="special" data-menuanchor="action">
                <a href="../index.html">Home</a>
            </li>
        </ul><button id="trigger-overlay" type="button"></button>
    </header>
    <div id="fullpage">
        <div class="section" id="section4">
            <div class="content-area" id="work" style="min-height: 100vh;">
                <div class="pre-content"></div>
                <div class="content-block">
                    <h1>${pageData.title}</h1>
                    <span>${catogoryStringReady}</span>
                    <div class="hero-image-wrapper">
                        <img src="${pageData.image}">
                    </div>
                    <div class="content-core">
                    ${md.render(pageContent)}
                    </div>
                </div>
            </div>
            <div class="footer" style="background: #222222;">
                <ul id="secondary-menu">
                    <li>
                        <a href="clients-and-partners.html">Clients & Partners</a>
                    </li>
                    <li>
                        <a href="blog-and-notes.html">Blog & Notes</a>
                    </li>
                </ul>
                <ul id="social-menu">
                    <li>
                        <a class="icon behance" href="https://www.behance.net/didiengeon0aa6" rel="noopener" target="_blank"
                            title=""></a>
                    </li>
                    <li>
                        <a class="icon dribbble" href="https://dribbble.com/saladinid" rel="noopener" target="_blank"
                            title=""></a>
                    </li>
                    <li>
                        <a class="icon instagram" href="https://www.instagram.com/lakonono.works/" rel="noopener"
                            target="_blank" title=""></a>
                    </li>
                    <li>
                        <a class="icon youtube" href="https://www.youtube.com/channel/UCkO1_CLA_xV7VktHBz9-9XQ?view_as=subscriber"
                            rel="noopener" target="_blank" title=""></a>
                    </li>
                    <li>
                        <a class="icon github" href="https://github.com/saladinid" rel="noopener" target="_blank" title=""></a>
                    </li>
                </ul>
                <h5 id="copyright-text">©2019 Farooqa</h5>
            </div>

        </div>
    </div>
    <div class="section overlay overlay-genie" data-steps="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z;m 698.9986,728.03569 41.23353,0 -3.41953,77.8735 -34.98557,0 z;m 687.08153,513.78234 53.1506,0 C 738.0505,683.9161 737.86917,503.34193 737.27015,806 l -35.90067,0 c -7.82727,-276.34892 -2.06916,-72.79261 -14.28795,-292.21766 z;m 403.87105,257.94772 566.31246,2.93091 C 923.38284,513.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 455.17312,480.07689 403.87105,257.94772 z;M 51.871052,165.94772 1362.1835,168.87863 C 1171.3828,653.78233 738.73561,372.23931 737.27015,806 l -35.90067,0 C 701.32034,404.49318 31.173122,513.78234 51.871052,165.94772 z;m 52,26 1364,4 c -12.8007,666.9037 -273.2644,483.78234 -322.7299,776 l -633.90062,0 C 359.32034,432.49318 -6.6979288,733.83462 52,26 z;m 0,0 1439.999975,0 0,805.99999 -1439.999975,0 z">
        <svg height="100%" preserveaspectratio="none" viewbox="0 0 1440 806" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path class="overlay-path" d="m 701.56545,809.01175 35.16718,0 0,19.68384 -35.16718,0 z"></path>
        </svg> <button class="overlay-close" type="button">Close</button>
        <nav>
            <ul>
                <li class="special" data-menuanchor="action">
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="clients-and-partners.html">Clients & Partners</a>
                </li>
                <li>
                    <a href="blog-and-notes.html">Blog & Notes</a>
                </li>
            </ul>
        </nav>
    </div>
    <input class="modal-state" id="modal-2" type="checkbox">
    <div class="section modal">
        <label class="modal__bg" for="modal-2"></label>
        <div class="modal__inner">
            <label class="modal__close" for="modal-2"></label>
            <div class="modal-container">
                <div class="modal-image-wrapper"></div>
                <div class="modal-content">
                    <h2 class="popup-title">Plan a Project</h2>
                    <p class="popup-text-small">You can start planning a project by sending a message below to us ...</p>
                    <form name="planAProjectForm" action="index.html" onsubmit="return validateForm()" method="GET">
                        <p class="popup-text-large">Hello, my name is
                            <input id="fname" name="fname" placeholder="Your name" type="text" />
                            , I can be contacted via email on
                            <input name="femail" placeholder="Your email" type="text">
                            or phone number on
                            <input name="fphone" placeholder="Your phone number" type="text">
                            , I will hold project
                            <select name="projects">
                                <option value="default">
                                    Select Project
                                </option>
                                <option value="design">
                                    Graphic Design
                                </option>
                                <option value="web">
                                    Website Development
                                </option>
                                <option value="mobile">
                                    Mobile App Development
                                </option>
                                <option value="marketing">
                                    Digital Marketing
                                </option>
                                <option value="custom">
                                    Custom Project
                                </option>
                            </select>
                            . I need Farooqa's help for this project.<br>
                            Please contact me immediately.</p>
                        <div class="popup-button">
                            <button class="button button-color" name="submit" type="submit" value="SUBMIT">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </script>
    <script src="../assets/script/lib/nav/classie.js">
    </script>
    <script src="../assets/script/lib/nav/demo12.js">
    </script>

  </body>
</html>
`;
  }
}

// this.defaultMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
// this.defaultMeta.scripts.map(value => `<script src="${value}"></script>`)
// ,
//   defaultMeta: {
//     lang: 'en',
//     title: 'A Page',
//     stylesheets: ['./css/style.css'],
//     scripts: ['./js/main.js'],
//     charset: 'utf-8',
//     description: 'This is a page',
//     keywords: 'page, sample',
//     author: 'None',
//     favicon: './images/favicon.png',
//     viewport: 'width=device-width, initial-scale=1',
//     extra: []
//   }