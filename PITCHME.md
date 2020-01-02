# Make a Snake

---

## Hyper
## Text
## Markup
## Language

---

#### Anatomy of an HTML element

```html
<tagname attribute="value" otherattribute="othervalue">
  Contents go inside
</tagname>
```

---?code=code/boilerplate.html&lang=html

@snap[north span-100]
#### Boilerplate
@snapend

@[1](This just tells the browser that this is an HTML document.)
@[2,11](Most HTML tags open and close.  This tag contains all of our HTML code.)
@[2,11](The lang="en" part tells the browser the text will be in English.  The lang is considered an attribute and the "en" is its value.)
@[2-3,7-11](Inside the html tag, there is a head and a body.)
@[2-3,7-11](HTML tags are generally nested inside one another. We use the words "parent" and "children", and "siblings" to refer to tags inside of other tags.)
@[3-7](The head contains data about the site.  You can see the child tags have more attributes and values.)
@[4-5](Here we are telling the browser to expect UTF-8 characters, and to make the page's width equal to the width of the device.)
@[6](Whatever is inside the title tag will display in the browser tab.)
@[8-10](The body will contain anything we want to display inside the browser window.)
@[9](This is an HTML Comment.  It won't display in the browser.  It's a way to write notes to yourself, or to temporarily disable certain parts of your code. However, whatever you write here is NOT a secret.)

---?code=code/title_headings.html&lang=html

@snap[north span-100]
#### Title and Headings
@snapend

@[6](Whatever you put in this tag displays in the browser tab.)
@[9-11](These are heading tags, they go from h1 to h6.  They are used to communicate the importance of different bits of text to the user.)

---?code=code/anchors_images.html&lang=html

@snap[north span-100]
#### Anchors and Images
@snapend

@[9-18](Different tags produce different elements in the browser.)
@[9-14](The a -- or anchor -- tag, makes what we commonly refer to as a link.   The img tag makes, not suprisingly, an image.)
@[9-14](The text in between the opening and closing tag is what text displays in the browser.  The href attribute specifies where the browser goes if the link is clicked.  The title attribute displays a tooltip when the user hovers over the link.)
@[15-18](Img tags are self closing, since there is no text inside.  The src attribute tells us where the image lives on the internet.  The alt attribute is a description of the image for people who use screen readers.)

---?code=code/divs_spans.html&lang=html

@snap[north span-100]
#### Divs and Spans
@snapend

@[9-16](Divs and spans are ways to organize and label your HTML.)
@[9,10](By default, divs stack vertically on the page.  This is called block display.)
@[12-15](By default, spans stack horizontally.  This is called inline display.)
@[9-16](We can label elements with ids and classes.  This doesn't do anything just yet, but we could use it later to apply styles or interactivity using CSS and JavaScript.)
@[9,10](Ids are for elements that occur only once inside the HTML document.)
@[12-15](Whereas classes are for elements that are a member of a group.)

---

#### 2 User Experiences

![Overlay](assets/image/overlay.gif)

---?code=code/sections.html&lang=html

@snap[north span-100]
#### 2 User Experiences
@snapend

@[8-15](Similar to divs, sections are a way of breaking up our content.  We will give each section a unique id attribute, so we can apply styles and interactivity later.)

---?code=code/overlay.html&lang=html

@snap[north span-100]
#### Welcome Screen HTML
@snapend

@[9-10,23-24](First, let's group all the content together in its own div, with an id of "overlay-content".)
@[11-19](Here we are communicating the most important text on the page with an h1, and two text snippets of secondary importance with h2 tags.)
@[11,15,18](Certain bits of text have unique ids because we intend to manipulate their text content later.)
@[20-22](The start button has an onclick attribute.  We will have to define what "startGame()" means later.)

---?code=code/tiles.html&lang=html

@snap[north span-100]
#### Game HTML
@snapend

@[26-125](We are making 100 game tiles we will ultimately display in a 10x10 grid.)
@[26-125](Each one has the same class, "tile", as well as a special attribute called data-tile-number with a unique, numeric value.)  
@[26-125](Attributes that start with the data prefix are -- not surprisingly -- for storing data about that HTML element that might be used elsewhere.)
@[26-125](Finally, we are putting some text inside each one just so we can see some output on the screen for now.)

---?code=code/css_js.html&lang=html

@snap[north span-100]
#### Link in CSS and JS
@snapend

@[7](This link tag pulls in styles we will write in a file called styles.css.  It goes in the head of our HTML document.)
@[128](This script tag pulls in the JavaScript we will write in a file called game.js.  It goes at the very bottom of the body tag.)

---

## Cascading
## Style
## Sheets

---

#### Anatomy of a style declaration

```css
target {
  property: value;
}
```

---?code=code/anatomy.css&lang=css

@snap[north span-100]
#### Anatomy of a style declaration
@snapend

@[1-4](Targets all text)
@[6-9](Targets all h2 elements)
@[11-17](Targets anything with a class of "tile")
@[19-22](Targets the element with an id of "overlay-title")
@[24-27](Targets anything with an onclick attribute)
@[29-32](Targets anything with a data-tile-number attribute of "3")
@[34-37](Targets anything with a class of "tile" and a data-tile-number attribute of "7")
@[39-42](Targets all spans that don't have an id of "high-score")
@[44-47](Targets any buttons that are direct children of the elements with an id of "overlay-content")
@[49-54](Targets the body only when the screen is less that 700px wide)

---?code=code/position.css&lang=css

@snap[north span-100]
#### Position
@snapend

@[1-5](Fixed position places an element in its own layer.)
@[1-5](The top, bottom, left or right properties are relative to the entire browser window.)
@[7-15](Relative and absolute positioning work together.)
@[7-15](The absolute element is taken out of the normal document flow, and placed relative to the nearest relative parent -- so tile 2 is in the upper right corner of the game.)

---?code=code/units.css&lang=css

@snap[north span-100]
#### Units
@snapend

@[1-3](Pixels may display differently across different devices.)
@[5-7](rems are multiples of the base font size.)
@[9-17](vw is viewport width, vh is viewport height, vmin is whichever is smaller, vmax is whichever is bigger -- these are used to create responsive layouts.)

---

#### Game Time

![CSS](assets/image/css.png)

---?code=code/body.css&lang=css

@snap[north span-100]
#### Body
@snapend

@[1-3](Let's give everything the same font.)
@[5-7](Let's give the body white text on a blue background.)
@[8-10](Let's make it take up the whole screen with no margin.)
@[11-13](This is a good way to center things horizontally and vertically.)

---?code=code/overlay.css&lang=css

@snap[north span-100]
#### Overlay
@snapend

@[15-22](Let's focus specifically on the welcome screen.)
@[15-18](This places the overlay in its own layer that takes up the full screen.)
@[19](This makes the background 80% opaque black.)
@[20-22](This attempts to center all of the content.)
@[24-30](Let's make the title a little bigger and center the text.)
@[32-36](Let's make the button a little bigger and make it look clickable.)
@[38-48](Finally, we need a way to hide the welcome screen when the user starts the game.)

---

Right click, inspect element, add class="hidden"

![Hidden](assets/image/hidden.png)

---?code=code/game.css&lang=css

@snap[north span-100]
#### Game
@snapend

@[42-46](Let's make the game board a 700px x 700px black square.  Making the color transparent will hide the tile number labels.)
@[47-50](This divides the game board into a 10x10 grid of equally sized squares.)
@[52-57](If the screen is smaller than 700px x 700px, shrink the game board accordingly.)
@[59-62](This will make the food tile a red circle.)
@[64-66](Any tile with a data-snake-segment attribute will display green.  This is how we will draw the snake on the board.)

---

Right click, inspect element, add class="food"

![Food](assets/image/food.png)

---

Inspect element, add data-snake-segment attribute

![Food](assets/image/snake-3.png)

---


