A collection of re-usable React components. For information and details please cheack each section.

# Button component
Button is one of the most widely used item in any website/application. The main parts of this components inluce the visual represantion of the button
but also the link it points to. To use, simply import the component


```
  import Button from './components/Button';
  
  //The button takes the following props: buttonText, buttonLink, mainColor, secColor, and outline. All of the props are self-explanatory except the
  //last one. Outline basically defines the order of the main/sec colors. A true/false value simply reverses the color pallete.
  
  <Button
    buttonText = 'enter your button text here',
    buttomLink = 'enter wich location you want the button to point at',
    mainColor = 'define the main color of your button',
    secColor = 'define the secondary color of your button',
    outline = {false}
  />
```

# Banner component
Here is a UI reusable dumb component of a full page banner. This component takes in multiple images as sources and applies them as background with a dark
overlay laid on top for contrast.

![Banner component](https://user-images.githubusercontent.com/56344856/125460884-df78e45e-2af4-4daa-a09c-660dbf50a98a.png)



