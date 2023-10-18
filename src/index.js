module.exports = function toReadable (number) {

  let str = number.toString();
  let result = "";

  if (str.length === 1) {
   result = str.replace('1','one').replace('2','two').replace('3','three').replace('4','four').replace('5','five').replace('6','six').replace('7','seven').replace('8','eight').replace('9','nine').replace('0','zero');
  }
else if (str.length === 2 && str[0] === '1') {

   result = str.replace('10','ten').replace('11','eleven').replace('12','twelve').replace('13','thirteen').replace('14','fourteen').replace('15','fifteen').replace('16','sixteen').replace('17','seventeen').replace('18','eighteen').replace('19','nineteen');
  }

 else if (str.length === 2) {
   result =
 str[0].replace('2','twenty').replace('3','thirty').replace('4','forty').replace('5','fifty').replace('6','sixty').replace('7','seventy').replace('8','eighty').replace('9','ninety').replace('10','ten') + str[1].replace('1',' one').replace('2',' two').replace('3',' three').replace('4',' four').replace('5',' five').replace('6',' six').replace('7',' seven').replace('8',' eight').replace('9',' nine').replace('0','');
 }

 else if (str.length === 3 && str[1] === '0') {
   result =
 str[0].replace('1','one hundred').replace('2','two hundred').replace('3','three hundred').replace('4','four hundred').replace('5','five hundred').replace('6','six hundred').replace('7','seven hundred').replace('8','eight hundred').replace('9','nine hundred') + str[1].replace('0','') + str[2].replace('1',' one').replace('2',' two').replace('3',' three').replace('4',' four').replace('5',' five').replace('6',' six').replace('7',' seven').replace('8',' eight').replace('9',' nine').replace('0','');
 }

 else if (str.length === 3 && str[1] === '1') {
   result =
 str[0].replace('1','one hundred ').replace('2','two hundred ').replace('3','three hundred ').replace('4','four hundred ').replace('5','five hundred ').replace('6','six hundred ').replace('7','seven hundred ').replace('8','eight hundred ').replace('9','nine hundred ') + str[2].replace('0','ten').replace('1','eleven').replace('2','twelve').replace('3','thirteen').replace('4','fourteen').replace('5','fifteen').replace('6','sixteen').replace('7','seventeen').replace('8','eighteen').replace('9','nineteen');
 }

 else if (str.length === 3) {
   result =
 str[0].replace('1','one hundred ').replace('2','two hundred ').replace('3','three hundred ').replace('4','four hundred ').replace('5','five hundred ').replace('6','six hundred ').replace('7','seven hundred ').replace('8','eight hundred ').replace('9','nine hundred ') +
str[1].replace('2','twenty').replace('3','thirty').replace('4','forty').replace('5','fifty').replace('6','sixty').replace('7','seventy').replace('8','eighty').replace('9','ninety').replace('10','ten') + str[2].replace('1',' one').replace('2',' two').replace('3',' three').replace('4',' four').replace('5',' five').replace('6',' six').replace('7',' seven').replace('8',' eight').replace('9',' nine').replace('0','');
 }
  return result;
}
