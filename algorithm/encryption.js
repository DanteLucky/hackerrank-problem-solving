function encryption(s) {
    // Time complexity - O(|s|)
  
    const str = s.replace(/\s/g, "");
  
    const cols = Math.ceil(Math.sqrt(str.length));
  
    const encrypted = new Array(cols).fill("");
  
    for (let i = 0; i < str.length; i++) {
      encrypted[i % cols] += str[i];
    }
  
    return encrypted.join(" ");
  }