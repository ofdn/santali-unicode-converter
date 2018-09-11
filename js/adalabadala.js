// Using pure javascript code as it can be used as offline 
function check_input() {
    if (document.getElementById('input_text').value == "") {
        sweetAlert("Oops...Nothing to convert!", "Paste your text in the left side box first.", "error");
        return false;
    }
}
function santali_to_unicode()
{
    check_input();
    var conversion_array = new Array("a", "ᱟ", "b", "ᱵ", "c", "ᱪ", "d", "ᱰ", "e", "ᱮ", "f", "ᱝ", "g", "ᱜ", "h", "ᱦ", "i", "ᱤ", "j", "ᱡ", "k", "ᱠ", "l", "ᱞ", "m", "ᱢ", "n", "ᱱ", "o", "ᱚ", "p", "ᱯ", "q", "ᱧ", "r", "ᱨ", "s", "ᱥ", "t", "ᱴ", "u", "ᱩ", "v", "ᱶ", "w", "ᱣ", "x", "ᱽ", "y", "ᱭ", "z", "ᱲ", "", "A", "ᱟ", "B", "ᱵ", "C", "ᱪ", "D", "ᱫ", "E", "ᱮ", "F", "ᱝ", "G", "ᱜ", "H", "ᱷ", "I", "ᱤ", "J", "ᱡ", "K", "ᱠ", "L", "ᱞ", "M", "ᱬ", "N", "ᱸ", "O", "ᱳ", "P", "ᱯ", "Q", "ᱧ", "R", "ᱨ", "S", "ᱥ", "T", "ᱛ", "U", "ᱩ", "V", "ᱶ", "W", "ᱣ", "X", "ᱽ", "Y", "ᱭ", "Z", "ᱲ", "", ".", "ᱹ", "~", "ᱻ", "_", "ᱼ", "-", "ᱼ", ":", "ᱺ", "|", "᱾", "\\", "᱿", "1", "᱑", "2", "᱒", "3", "᱓", "4", "᱔", "5", "᱕", "6", "᱖", "7", "᱗", "8", "᱘", "9", "᱙", "0", "᱐");

    var conversion_array_length = conversion_array.length;
    var input_string = document.getElementById("input_text").value;
    alert(input_string);
    var text_size = input_string.length;
    var unicode_text = ''; 
    var position1 = 0;
    var position2 = 0;
    var process_queue = 1;
    var chunk_size = 10000; 
    while (process_queue == 1) {
        position1 = position2;
        if (position2 < (text_size-chunk_size)) {
            position2 +=  chunk_size;
        } else {
            position2 = text_size;
            process_queue = 0 
        }
        var input_string = document.getElementById("input_text").value.substring(position1, position2);
        replace_symbols();
        var unicode_text = unicode_text + input_string;
        document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.';                                                                                                                   
        document.getElementById("unicode_text").value = unicode_text;
        function replace_symbols() {
            if (input_string != "") {
                for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
                    index = 0;
                    while (index != -1)
                    {
                        input_string = input_string.replace(conversion_array[conversion_character_index] , conversion_array[conversion_character_index+1])
                        index = input_string.indexOf(conversion_array[conversion_character_index])
                    } 
                }
            }
        }
    }
}

function select_and_copy() {
  if (document.getElementById('unicode_text').value == "") {
    // alert('There is nothing to copy. Please select the conversion buttons first.')
    sweetAlert("Oops...There is nothing to copy!", "Please select the conversion buttons first.", "error");
  } else {
    //select the converted text
    document.getElementById('unicode_text').select();
    //copy the selected text
    document.execCommand('copy');
    document.getElementById('unicode_text_button').value = "Copied";
    setTimeout(function(){
      document.getElementById('unicode_text_button').value = "Click to select all and copy";
    }, 2000);
  }
}
