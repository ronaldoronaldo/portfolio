import { createGlobalStyle } from 'styled-components'
import { colors, sizes } from 'config/ui'
import './icons.css'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: ${sizes.text}px;
    color: ${colors.black6};
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    overflow-x: hidden;
    transition: background-color 0.5s ease-out;
  }
  body.curriculum {
    background-color: ${colors.portBlack};
  }

  body.about-me {
    background-color: ${colors.black5};
  }  
  
  body.examples {
    background-color: ${colors.black2};
  }  

 #root {
    @media print {
      display: none;
    }
  }

  #print {
    visibility: hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    height: 0;

    @media print {
      visibility: visible;
      width: 100%;
      height: auto;
      position: absolute;
    }
  }

  #modal {
    position: absolute;
    top: 0;
  }

  a {
    text-decoration: none;
  }

  button, input {
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
  }

  button, input, textarea {
    -webkit-appearance: none;
  }

  p {
    font-size: ${sizes.text}px;
    line-height: 27px;
  }

  ${[1, 2, 3, 4, 5].map(
    size => `
    h${size} {
      font-size: ${sizes.h[size].size}px;
      color: ${colors.black6};
      line-height: ${sizes.h[size].lineHeight}px;
    }
  `
  )}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
}


  /* quill */
  .ql-snow .ql-tooltip[data-mode="video"] {
    left: 0 !important;

    &:before {
      content: "Video:" !important;
    }

    > a.ql-action {
      &:after {
        content: "Salvar" !important;
      }
    }
  }

  .ql-container.ql-disabled .ql-tooltip.ql-hidden {
    display: none;
  }

  .ql-bubble.ql-disabled .ql-editor {
    padding: 0;
  }

  .ql-editor *{
    font-family: 'Lato', sans-serif;
  }

  .ql-editor ol,
  .ql-editor ul{
    padding-top: 16px!important;
  }

  .ql-editor a{
    color: ${colors.blue}!important;
  }

  .ql-editor ol li,
  .ql-editor ul li,
  .ql-editor ul li p{
    color: ${colors.black1};
    font-size: 15px;
    line-height: 24px;
  }
  .ql-editor ol li,
  .ql-editor ul li{
    margin-bottom: 16px;
  }

  .ql-editor iframe{
    width: 520px;
    height: 295px;
  }

  .quill .ql-container .ql-editor p,
  .quill .ql-container .ql-editor p span{
    color: ${colors.black1}!important;
  }

  .quill .ql-container .ql-editor img{
    display: block;
    max-width: 100%;
  }

  /* Slider */
  .slick-slider
  {
      position: relative;

      display: block;
      box-sizing: border-box;

      -webkit-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
          touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
  }

  .slick-list
  {
      position: relative;

      display: block;
      overflow: hidden;

      margin: 0;
      padding: 0;
  }
  .slick-list:focus
  {
      outline: none;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list
  {
    transform: translate3d(0, 0, 0);
  }

  .slick-track
  {
      position: relative;
      top: 0;
      left: 0;

      display: block;
  }
  .slick-track:before,
  .slick-track:after
  {
      display: table;

      content: '';
  }
  .slick-track:after
  {
      clear: both;
  }

  .slick-slide
  {
      display: none;
      float: left;

      height: 100%;
      min-height: 1px;
  }

  .slick-initialized .slick-slide
  {
      display: block;
  }

  .ReactVirtualized__Table__rowColumn {
    padding: 0 10px;
  }

  .__react_component_tooltip {
    font-size: 13px !important;
    border-radius: ${sizes.radius}px !important;
    padding: 4px 8px !important;
    opacity: 1 !important;
  }

  .__react_component_tooltip.type-dark {
    background-color: ${colors.black1};
    max-width: 300px;
  }

  .__react_component_tooltip:after, .__react_component_tooltip:before {
    display: none !important;
  }


  .quill-multiple-choice-item {
    display: flex!important;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    .ql-container{
      min-height: 46px !important;
      width: calc(100% - 46px);
      border: 1px solid #dfe5e9!important;
      border-radius: 3px;
    }

    .ql-editor{
      border: none;
      min-height: 44px!important;

      &:before{
        font-size: 15px!important;
        font-style: normal!important;
        color: #9eaeb7!important;
        padding-top: 2px;
      }
    }

    &.quill-multiple-choice-item--is-correct{
      .ql-container{
        border: 1px solid #58d68d!important;
      }

      .ql-editor{
        &:before{
          color: #58d68d!important;
        }
      }
    }

    .ql-toolbar {
      border: 0 none !important;
      width: 30px;
      height: 30px;
      margin-left: 16px;
      padding: 0!important;

      span{
        margin: 0!important;
        padding: 0!important;
      }

      .ql-formats:first-child{
        display: none !important;
      }
      button {
        display: none !important;
        &.ql-image {
          display : block !important;
        }
      }

      .ql-image {
        &:before {
          font-family: 'iconcombo' !important;
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;

          /* Better Font Rendering =========== */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          content: "\\e98f";
          font-size: 24px;
          color: #9eaeb7;
          transition: all .5s ease-in-out;


        }

        &:hover{
          &:before{
            color: #53656f;
          }
        }

        svg {
          display: none;
        }
      }
    }
  }
 
`

export default GlobalStyle
