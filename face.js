function decideClothes() {
    var faceShape = document.getElementById('faceShape').value;
    var clothes = '';

    // Determine suitable clothes based on face shape
    switch (faceShape) {
        case'select':
            clothes='select';
            break;
        case 'oval':
            clothes = 'V-neck tops, wrap dresses, and long jackets.';
            break;
        case 'round':
            clothes = 'Empire waist tops, A-line skirts, and high-waisted pants.';
            break;
        case 'square':
            clothes = 'Soft, flowing fabrics, asymmetrical tops, and layered outfits.';
            break;
        case 'heart':
            clothes = 'Sweetheart necklines, wide-leg pants, and belted dresses.';
            break;
        case 'diamond':
            clothes = 'Scoop necklines, wide straps, and full skirts.';
            break;
        case 'oblong':
            clothes = 'Cropped jackets, boat necklines, and layered tops.';
            break;
        case 'triangle':
            clothes = 'Wide-legged trousers, A-line skirts, and boat necklines.';
            break;
        default:
            clothes = 'Please select a face shape.';
    }

    // Display the suitable clothes
    document.getElementById('output').innerHTML = '<p>Suitable clothes for your face shape: ' + clothes + '</p>';
}