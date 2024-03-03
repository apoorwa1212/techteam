function decideColor() {
    var facecolor = document.getElementById('facecolor').value;
    var colors = '';

    // Determine suitable clothes based on face shape
    switch (facecolor) {
        case 'Very light':
            colors = 'Pastel colors: Soft shades like baby blue, lavender, and pale pink can complement very light skin tones' +
                ' Beige: Neutral tones like beige can provide a soft contrast without overwhelming the complexion.' +
                ' Light Gray: Offers a modern and understated look that works well with very light skin tones.';
            break;
        case 'Light':
            colors = 'Soft Neutrals: Colors like ivory, light peach, and warm beige can enhance the natural warmth of light skin tones.';
            break;
        case 'Medium':
            colors = 'Earth Tones: Colors like olive green, camel, and terracotta can complement the warmth of medium skin tones.' +
                ' Jewel Tones: Rich colors such as emerald green, sapphire blue, and deep plum can provide a striking contrast against medium skin tones.' +
                ' Coral: Adds a vibrant and youthful touch that complements the warmth of medium skin tones.';
            break;
        case 'Olive':
            colors = 'Warm Neutrals: Shades like caramel, chocolate brown, and golden beige can enhance the natural warmth of olive skin tones.' +
                ' Burnt Orange: Provides a bold and energetic look that complements the richness of olive skin tones.' +
                ' Turquoise: Offers a refreshing and vibrant contrast that complements the green undertones often found in olive skin.';
            break;
        case 'Dark':
            colors = 'Bold Colors: Deep shades like royal blue, rich purple, and deep red can provide a striking contrast against dark skin tones.' +
                ' Gold: Adds a luxurious and regal touch that complements the warmth of dark skin tones.' +
                ' Jewel Tones: Rich colors such as ruby red, emerald green, and amethyst purple can enhance the richness of dark skin tones.';
            break;
        default:
            colors = 'Please select a face color.';
    }

    // Display the suitable clothes
    document.getElementById('output').innerHTML = '<p>Suitable clothes for your face shape: ' + colors + '</p>';
}
