
function createLogo(initials, txtColor, shape, color) {
    if (initials.length > 3) {
        return "Invalid initials. Please provide up to three characters.";
      }
      
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">';
    
    // Create the shape based on the provided parameters
    switch (shape) {
      case "circle":
        svg += '<circle cx="100" cy="150" r="80" fill="' + color + '"/>';
        break;
      case "square":
        svg += '<rect x="20" y="20" width="160" height="260" fill="' + color + '"/>';
        break;
      case "triangle":
        svg += '<polygon points="100,20 180,280 20,280" fill="' + color + '"/>';
        break;
      default:
        svg += '<rect x="20" y="20" width="160" height="260" fill="' + color + '"/>';
    }
    
    // Add the initials as text
    svg += '<text x="100" y="180" text-anchor="middle" fill="' + txtColor + '">' + initials + '</text>';
    
    svg += '</svg>';
    
    return svg;
  }
  