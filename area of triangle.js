function calculateArea(side1, side2, side3) {
    let Perimeter = Math.floor((side1 + side2 + side3) / 2);

    let area = Math.sqrt(Perimeter * ((Perimeter - side1) * (Perimeter - side2) * (Perimeter - side3)));

    console.log(area);
}

calculateArea(5, 6, 7);