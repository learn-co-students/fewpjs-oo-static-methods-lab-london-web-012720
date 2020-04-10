class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)

  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )

  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let wordArray = sentence.split( " " )
    for (let a = 0; a < wordArray.length; a++) {
      if ( a == 0 ) {
        result.push( this.capitalize(wordArray[a]))
      } else {
        if ( exceptions.includes(wordArray[a])) {
          result.push(wordArray[a])
        } else {
          result.push(this.capitalize(wordArray[a]))
        }
      }

    }
    return result.join( " " );
  }
}


