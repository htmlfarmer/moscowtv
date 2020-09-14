$cols: 10;
$rows: 6;
$cells: $cols * $rows;
$bgcolor: #6223D2;
$shapeHeight: 230;
$shapeWidth: 200;

body {
  margin: 0; 
  background-color: $bgcolor;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

//Radial gradient to fade edges of viewport
.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute; 
  z-index: 2;
  background: radial-gradient(circle, transparent 0%, transparentize($bgcolor, .15) 100%);
}

//Container to provide grid layout for all items
.container {
  display: grid;

  grid-template-columns: repeat($cols, $shapeWidth+px);
  grid-template-rows: repeat($rows, $shapeHeight+px);
  transform: translate(-3%, -4%); // Starting point bleeds off edge
}

//Invividual shapes
.shape {
  width: $shapeWidth+px;
  height: $shapeHeight+px;
  //Create hexagon mask 
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); 
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); 
  
  //Snap hexagon together by moving each "row" up and over
  @for $i from 1 through $cells {
    @if $i > $cols {
      &:nth-child(#{$i}) {
        transform: translate(-50%, -25%);   
      }
    }
    @if $i > ($cols * 2) {
      &:nth-child(#{$i}) {
        transform: translate(0%, -50%);   
      }
    }
    @if $i > ($cols * 3) {
      &:nth-child(#{$i}) {
        transform: translate(-50%, -75%);   
      }
    }
    @if $i > ($cols * 4) {
      &:nth-child(#{$i}) {
        transform: translate(0%, -100%);   
      }
    }
    @if $i > ($cols * 5) {
      &:nth-child(#{$i}) {
        transform: translate(-50%, -125%);   
      }
    }
  }
}
      

