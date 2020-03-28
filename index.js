class Formatter {
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(str){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let str_to_return = str.split(" ");
    // str_to_return.forEach(element => {
    //   if (exceptions.includes(element)) console.log("yeah");
    //   else console.log("nos");
    // });
    str_to_return = str_to_return.map( e => {
      if (exceptions.includes(e)) return e;
      else return this.capitalize(e);
    })
    str_to_return[0] = this.capitalize(str_to_return[0]);
    return str_to_return.join(" ");
    
  }
}