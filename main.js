

const tailwindObj = {
    // padding
    "chai-p-1": "padding: 4px",
    "chai-p-2": "padding: 8px",
    "chai-p-3": "padding: 12px",
    "chai-p-4": "padding: 16px",
    "chai-p-5": "padding: 20px",
    "chai-p-6": "padding: 24px",
    "chai-p-7": "padding: 28px",
    "chai-p-8": "padding: 32px",
    // x-axis 
    "chai-px-1": "padding-left: 4px; padding-right: 4px",
    "chai-px-2": "padding-left: 8px; padding-right: 8px",
    "chai-px-3": "padding-left: 12px; padding-right: 12px",
    "chai-px-4": "padding-left: 16px; padding-right: 16px",
    // y-axis
    "chai-py-1": "padding-top: 4px; padding-bottom: 4px",
    "chai-py-2": "padding-top: 8px; padding-bottom: 8px",
    "chai-py-3": "padding-top: 12px; padding-bottom: 12px",
    "chai-py-4": "padding-top: 16px; padding-bottom: 16px",


    // margin
    "chai-m-1": "margin: 4px",
    "chai-m-2": "margin: 8px",
    "chai-m-3": "margin: 12px",
    "chai-m-4": "margin: 16px",
    "chai-m-5": "margin: 20px",
    "chai-m-6": "margin: 24px",
    "chai-m-7": "margin: 28px",
    "chai-m-8": "margin: 32px",
    // x-axis 
    "chai-mx-1": "margin-left: 4px; margin-right: 4px",
    "chai-mx-2": "margin-left: 8px; margin-right: 8px",
    "chai-mx-3": "margin-left: 12px; margin-right: 12px",
    "chai-mx-4": "margin-left: 16px; margin-right: 16px",
    // y-axis
    "chai-my-1": "margin-top: 4px; margin-bottom: 4px",
    "chai-my-2": "margin-top: 8px; margin-bottom: 8px",
    "chai-my-3": "margin-top: 12px; margin-bottom: 12px",
    "chai-my-4": "margin-top: 16px; margin-bottom: 16px",

    // flexbox
    "chai-flex": "display: flex",
    "chai-flex-col": "flex-direction: column",
    "chai-justify-center": "justify-content: center",
    "chai-items-center": "align-items: center",
    "chai-justify-between": "justify-content: space-between",
    "chai-justify-around": "justify-content: space-around",

    "chai-flex-wrap": "flex-wrap: wrap",
    "chai-flex-nowrap": "flex-wrap: nowrap",

    // gap
    "chai-gap-1": "gap: 4px",
    "chai-gap-2": "gap: 8px",
    "chai-gap-3": "gap: 12px",
    "chai-gap-4": "gap: 16px",

    // text
    "chai-text-sm": "font-size: 12px",
    "chai-text-md": "font-size: 20px",
    "chai-text-lg": "font-size: 28px",
    "chai-text-xl": "font-size: 36px",

    // font weight
    "chai-font-bold": "font-weight: 700",
    "chai-font-semibold": "font-weight: 600",

    // background colors
    "chai-bg-red": "background-color: red",
    "chai-bg-blue": "background-color: blue",
    "chai-bg-green": "background-color: green",
    "chai-bg-yellow": "background-color: yellow",
    "chai-bg-black": "background-color: black",
    "chai-bg-orange": "background-color: orange",
    "chai-bg-brown": "background-color: brown",
    "chai-bg-pink": "background-color: pink",
    "chai-bg-gray": "background-color: gray",
    "chai-bg-white": "background-color: white",

    // text colors
    "chai-text-white": "color: white",
    "chai-text-black": "color: black",
    "chai-text-red": "color: red",
    "chai-text-blue": "color: blue",
    "chai-text-green": "color: green",

    // borders
    "chai-border": "border: 1px solid black",
    "chai-border-2": "border: 2px solid black",

    "chai-rounded": "border-radius: 4px",
    "chai-rounded-sm": "border-radius: 8px",
    "chai-rounded-md": "border-radius: 12px",
    "chai-rounded-lg": "border-radius: 16px",
    "chai-rounded-xl": "border-radius: 20px",
    "chai-rounded-full": "border-radius: 100px",


    //width
    "chai-w-full": "width: 100%",
    "chai-w-vw": "width: 100vw",
    "chai-w-half": "width: 50%",
    "chai-w-10": "width: 50px",
    "chai-w-20": "width: 100px",
    "chai-w-30": "width: 150px",
    "chai-w-40": "width: 200px",
    "chai-w-50": "width: 250px",
    "chai-w-60": "width: 300px",
    "chai-w-70": "width: 400px",
    "chai-w-80": "width: 500px",
    
    // height
    "chai-h-full": "height: 100%",
    "chai-h-vh": "height: 100vh",
    "chai-h-half": "height: 50%",
    "chai-h-10": "height: 50px",
    "chai-h-20": "height: 100px",
    "chai-h-30": "height: 150px",
    "chai-h-40": "height: 200px",
    "chai-h-50": "height: 250px",
    "chai-h-60": "height: 300px",
    "chai-h-70": "height: 400px",
    "chai-h-80": "height: 500px",

    // positions
    "chai-relative": "position: relative",
    "chai-absolute": "position: absolute",
    "chai-fixed": "position: fixed",
    "chai-sticky": "position: sticky",

    "chai-top-0": "top: 0",
    "chai-bottom-0": "bottom: 0",
    "chai-left-0": "left: 0",
    "chai-right-0": "right: 0",

    // display
    "chai-block": "display: block",
    "chai-inline": "display: inline",
    "chai-inline-block": "display: inline-block",
    "chai-hidden": "display: none",

    // z-index
    "chai-z-0": "z-index: 0",
    "chai-z-10": "z-index: 10",
    "chai-z-20": "z-index: 20",
    "chai-z-50": "z-index: 50",

    // opacity
    "chai-opacity-0": "opacity: 0",
    "chai-opacity-25": "opacity: 0.25",
    "chai-opacity-50": "opacity: 0.5",
    "chai-opacity-75": "opacity: 0.75",
    "chai-opacity-100": "opacity: 1",

    // overflow properties
    "chai-overflow-hidden": "overflow: hidden",
    "chai-overflow-scroll": "overflow: scroll",
    "chai-overflow-auto": "overflow: auto",

    // visibility properties
    "chai-visible": "visibility: visible",
    "chai-invisible": "visibility: hidden",

    // box-sizing
    "chai-box-border": "box-sizing: border-box",
    "chai-box-content": "box-sizing: content-box",

    // text alignment
    "chai-text-left": "text-align: left",
    "chai-text-center": "text-align: center",
    "chai-text-right": "text-align: right",

    // list items 
    "chai-list-none": "list-style: none",
    "chai-list-disc": "list-style: disc",
    "chai-list-circle": "list-style: circle",
    "chai-list-square": "list-style: square",
    "chai-list-decimal": "list-style: decimal",


    // grid properties
    "chai-grid": "display: grid",
    "chai-grid-cols-1": "grid-template-columns: repeat(1, 1fr)",
    "chai-grid-cols-2": "grid-template-columns: repeat(2, 1fr)",
    "chai-grid-cols-3": "grid-template-columns: repeat(3, 1fr)",
    "chai-grid-cols-4": "grid-template-columns: repeat(4, 1fr)",

    "chai-col-span-2": "grid-column: span 2",
    "chai-col-span-3": "grid-column: span 3",

    // shadow
    "chai-shadow": "box-shadow: 0 2px 4px rgba(0,0,0,0.1)",
    "chai-shadow-lg": "box-shadow: 0 4px 10px rgba(0,0,0,0.2)"
};


 function generateChaiCSS(obj) {
      let css = "";
      for (let key in obj) {
        css += `.${key} { ${obj[key]}; }\n`;
    }
    console.log(css)
      return css;
    }

    
    const styleTag = document.createElement("style");
    styleTag.innerHTML = generateChaiCSS(tailwindObj);
    document.head.appendChild(styleTag);
    document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll("*");

  elements.forEach((el) => {
    const classList = Array.from(el.classList);

    classList.forEach((cls) => {

      if (cls.startsWith("chai-")) {

      
        if (tailwindObj[cls]) {

          applyStyles(el, tailwindObj[cls]);

        } 
       
        else {

          const dynamicStyle = parseDynamicClass(cls);

          if (dynamicStyle) {
            applyStyles(el, dynamicStyle);
          }

        }

      }

    });
  });

});


// 🔥 Helper: Apply styles inline
function applyStyles(el, styleString) {
  const styles = styleString.split(";");

  styles.forEach(style => {
    if (style.trim()) {
      const [prop, value] = style.split(":");
      el.style[prop.trim()] = value.trim();
    }
  });
}


