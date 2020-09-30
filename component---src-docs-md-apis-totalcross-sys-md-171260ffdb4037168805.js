(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Yi3g:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),b=a("hhGP"),o=(a("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/totalcross.sys.md"}});var l={_frontmatter:o},s=b.a;function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"totalcrosssys"},"totalcross.sys"),Object(i.b)("h2",{id:"settings"},"Settings"),Object(i.b)("p",null,"This class provides some preferences from the device configuration and other VM settings. All settings are read-only, unless otherwise specified. Changing their values may cause the VM to crash. Look at its JavaDoc for more details."),Object(i.b)("h2",{id:"vm"},Object(i.b)("strong",{parentName:"h2"},"VM")),Object(i.b)("p",null,"Vm contains various system-level methods. This class contains methods to copy arrays, obtain a timestamp, sleep, and get platform and version information, among many other things. Look at its JavaDoc for more details."),Object(i.b)("h2",{id:"time"},"Time"),Object(i.b)("p",null,"The Time class stores a specific a date and time."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"year")," must have ",Object(i.b)("strong",{parentName:"li"},"4 digits")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"hour")," is ",Object(i.b)("strong",{parentName:"li"},"numbered in 24-hour notation"),", which is the international standard notation of time, and may also be referred as military time or astronomical time.")),Object(i.b)("p",null,"For performance reasons, the Time fields have public access. So you can directly access the field day to get or set its value, instead of calling a method. However, that makes the Time objects unsafe because the fields’ values are not checked when they are set, and may not be within the field valid range."),Object(i.b)("p",null,"Since the fields can be set without any kind of validation, it would be pointless to add validation to the other methods, therefore, the Time fields’ values are never validated by any method or constructor. So you must know and always respect the fields’ range, and never set a field with a variable without first checking if the value is withing range ","(","for instance, let the user type the hour in an edit and simply convert it to int and set the hour field, without checking if its value is between 0 and 23",")","."),Object(i.b)("p",null,"The Time fields with their respective range:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"year:")," The year in 4 digits;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"month:")," The month in the range of 1 to 12;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"day:")," The day in the range of 1 to the last day of the specified month;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hour:")," The hour in the range of 0 to 23;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minute:")," The minute in the range of 0 to 59;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"second:")," The second in the range of 0 to 59;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"millis:")," Milliseconds in the range of 0 to 999;")),Object(i.b)("p",null,'{% hint style="info" %}\nTime has a constant called ',Object(i.b)("strong",{parentName:"p"},"SECONDS_PER_DAY"),", which obviously represents the ",Object(i.b)("strong",{parentName:"p"},"number of seconds")," in a day, being equal to 24 ","*"," 3600.\n{% endhint %}"),Object(i.b)("h3",{id:"constructors"},"Constructors"),Object(i.b)("p",null,"Time has six constructors:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(",")"),": Default constructor, creates a Time object set with the device’s current date and time. Most devices do not keep track of the milliseconds, therefore, the field millis of the new object will always have the default value 0 on them."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(","int year, int month, int day, int hour, int minute, int second, int millis",")",":")," Creates a Time object with the given values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(","long t",")",":")," Creates a Time object from the given value, which must be in the format YYYYMMDDHHMMSS."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(","int yyyymmdd, int hhmmssmmm",")",":")," Constructs a Time object from the given date and time values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(","String iso8601",")",":")," Creates a Time object using the given string, which must be in the ISO8601 format: YYYYMMDDTHH:MM:SS.")),Object(i.b)("p",null,'{% hint style="warning" %}\nPlease notice the last three constructors do not include the milliseconds, so the field millis will keep its default value 0.\n{% endhint %}'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Time","(","String time, boolean hasYear, boolean hasMonth, boolean hasDay, boolean hasHour, boolean hasMinute, boolean hasSeconds",")",":")," Constructs a Time object, parsing the string and placing the fields depending on the flags that were set, using Settings.timeSeparator as spliter. The number of parts must match the number of true flags, or an ",Object(i.b)("inlineCode",{parentName:"li"},"ArrayIndexOutOfBoundsException")," will be thrown. AM/PM is supported.")),Object(i.b)("p",null,'{% hint style="warning" %}\n',Object(i.b)("strong",{parentName:"p"},"Remember"),": no kind of validation is done on the Time fields values, not even on the constructors. However, the default constructor will never initialize an object with invalid values, and the last two constructors may throw an InvalidNumberException if it fails to parse the given string.\n{% endhint %}"),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("p",null,"Finally, Time has the following methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"update()")),": Updates the internal fields with the current timestamp."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"quals(Object o)"),":")," Compares two Time objects for equality. The result is true if and only if the argument is not null and it’s a Time object that represents the same point in time, from year to millisecond, as this object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"getTimeLong()"),":")," Converts this Time object to a long value in the format YYYYMMDDHHMMSS. Milliseconds is not included.YYYYMMDDHHMMSS. Milliseconds is not included."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"toIso8601()")),": Converts this Time object to a string in the ISO8601 format: YYYYMMDDTHH:MM:SS. Milliseconds is not included."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"toString()")),": Returns the time in format specified in totalcross.sys.Settings ","(","does NOT include the date neither the milliseconds",")",". To return the date, use the class totalcross.util.Date. So, to get a string with the date and time, use:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Time t = new Time();")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'String dateAndTime = new Date(t) + " " + t;')))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"toString(String timeSeparator)")),": Similar to the above method except that it uses the specified separator."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"dump(StringBuffer sb, String timeSeparator, boolean includeMillis)"))," : Dumps the time into the given StringBuffer, using the given separator and including the millileconds if asked by the user."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"isValid()")),": Returns true if the time is valid. Note that the date part is NOT checked; only hour, minute, second, and millis are checked against valid ranges."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"inc(int hours, int minutes, int seconds)")),": Increments or decrements the fields below. Note that this method does NOT update the day/month/year fields. The parameters can be positive ","(","to increment",")",", zero ","(","to keep it",")",", or negative ","(","to decrement",")",".")),Object(i.b)("h2",{id:"characterconvert"},"CharacterConvert"),Object(i.b)("p",null,"This class is used to correctly handle international character conversions. The default character scheme converter is the 8859-1 ","(","ISO Latin 1",")","."),Object(i.b)("p",null,"If you want to use a different one, you must extend this class, implementing the ",Object(i.b)("inlineCode",{parentName:"p"},"bytes2chars()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"chars2bytes()")," methods, and then assign the public member of ",Object(i.b)("inlineCode",{parentName:"p"},"Convert.charConverter")," to use your class instead of this default one. You can also use the method ",Object(i.b)("inlineCode",{parentName:"p"},"Convert.setDefaultConverter()")," to change it, passing, as parameter, the prefix of your CharacterConverter class ","(","better look at the implementation to know what to pass on",")","."),Object(i.b)("p",null,"For example, if you created a class named Iso88592CharacterConverter, call"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Convert.setDefaultConverter("Iso88592");\n')),Object(i.b)("p",null,"To find out which ",Object(i.b)("inlineCode",{parentName:"p"},"sun.io.CharacterEncoder")," you’re using on JDK to implement an equivalent version for TotalCross, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'System.out.println("" + sun.io.ByteToCharConverter.getDefault());\n')),Object(i.b)("h2",{id:"utf8characterconvert"},"UTF8CharacterConvert"),Object(i.b)("p",null,"This class extends the CharacterConvert class, and implements the UTF8 byte to UCS-2 character conversion. To use this class, you can call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Convert.setDefaultConverter("UTF8");\n')),Object(i.b)("h2",{id:"convert"},"Convert"),Object(i.b)("p",null,"Convert basically provides methods that allows object and basic type conversion. Furthermore, it also provides handy methods for common operations that should be used for a better performance."),Object(i.b)("p",null,"This class is final and cannot be instantiated – its methods and fields are static."),Object(i.b)("p",null,"To give you a better view of this class, its documentation was split into sub-sections:"),Object(i.b)("h3",{id:"changing-the-default-character-converter"},Object(i.b)("strong",{parentName:"h3"},"Changing the default character converter")),Object(i.b)("p",null,"The field charConverter keeps a reference to a character converter that will be used by default. You may change it by setting another character converter of your choice."),Object(i.b)("p",null,"You may also use the method ",Object(i.b)("inlineCode",{parentName:"p"},"setDefaultConverter(String name)"),", which searches for a character converter by its name, and makes it the default by changing the charConverter field. Use like"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Convert.setDefaultConverter("UTF8");\n')),Object(i.b)("p",null,"to change all bytes_to_char and ",Object(i.b)("inlineCode",{parentName:"p"},"char_to_bytes")," operations to use UTF8 instead. Issuing"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Convert.setDefaultConverter("");\n')),Object(i.b)("p",null,"sets back the default encoder. The method returns true if the given encoder was found; false, otherwise. If not found, the encoder is reseted to the default one ","(","ISO 8859-1",")","."),Object(i.b)("h3",{id:"conversion-between-string-and-basic-types"},Object(i.b)("strong",{parentName:"h3"},"Conversion between String and basic types")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Method")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toDouble","(","String s",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given string to double.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toInt","(","String s",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given string to int. The number may be prefixed with 0’s.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toShort","(","String s",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Convert a string to the short type. Note that this method is slower than ","(","short",")","Convert.toInt","(",")",". However, it will throw an InvalidNumberException if the number is out of the short range.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toLong","(","String s",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given string to long.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toLong","(","String s, int radix",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given string to long in the given radix, which must be between 2 and 16.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","boolean b",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given boolean to a string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","char c",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given char to a string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","double d",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given double to a string, formatted in scientific notation.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","double val, int decimalCount",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given double to a string, formatted with the given number of decimal places.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","int i",")"," Converts"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"the given int to a string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","long l",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given long to a string using base 10.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","long i, int radix",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given long to a string in the given radix, which must be between 2 and 16.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toString","(","String doubleValue, int n",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Formats the given string as a double, rounding with n decimal places.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"unsigned2hex","(","int b, int places",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given unsigned integer to hexadecimal using the given number of places ","(","up to 8",")",".")))),Object(i.b)("h3",{id:"character-string-and-stringbuffer-utilities"},Object(i.b)("strong",{parentName:"h3"},"Character, String and StringBuffer utilities")),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",{style:{textAlign:"left"}},Object(i.b)("b",null,"Method")),Object(i.b)("th",{style:{textAlign:"left"}},"Definition"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},Object(i.b)("p",null),Object(i.b)("p",null,"appendPath(String path1, String path2)")),Object(i.b)("td",{style:{textAlign:"left"}},"Concatenates two strings, ensuring there’s a single slash between them. Removes extra slashes or backslashes if necessary.")),Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},"digitOf(char ch, int radix)"),Object(i.b)("td",{style:{textAlign:"left"}},"Returns the value of the digit stored as char in the specified radix, which must be between 2 and 16. This method only handles the standard ASCII table.")),Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},"dup(char c, int count)"),Object(i.b)("td",{style:{textAlign:"left"}},"Returns a string filled with the given char and size equals to count.")),Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},"forDigit(int digit, int radix)"),Object(i.b)("td",{style:{textAlign:"left"}},"Returns the given digit in the specified radix, which must be between 2 and 16.")),Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},"getBreakPos(FontMetrics fm,StringBuffer sb,int start, int width,boolean doWordWrap)"),Object(i.b)("td",{style:{textAlign:"left"}},"Finds the best position to break the line with the given width, respecting word-wrap option and line endings")),Object(i.b)("tr",null,Object(i.b)("td",{style:{textAlign:"left"}},"hashCode(StringBuffer sb)"),Object(i.b)("td",{style:{textAlign:"left"}},"Returns the hash code of the string stored by this StringBuffer.")))),Object(i.b)("p",null,"The class StringBuffer does not have a method that returns its hash code, so you would have to first create a String from the StringBuffer to get its hash code, like this:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"int hashCode = sb.toString.hashCode();")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Method")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Convert.hashCode","(",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"calculates the StringBuffer’s hash code directly, without using an intermediary String object, resulting in better performance and memory usage.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"insertAt","(","StringBuffer sb, int pos, char c",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Inserts the given char at the specified position in the StringBuffer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"insertLineBreak","(","int maxWidth, FontMetrics fm, String text",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns a new string which is a copy of the given text with line breaks, placed based on the maxWidth and fm arguments. Very useful method to help you keep your application’s interface cross-platform. It can be used to insert line breaks on strings passed to message boxes or list boxes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"insertLineBreak","(","int maxWidth, FontMetrics fm, String text",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns a new string which is a copy of the given text with line breaks, placed based on the maxWidth and fm arguments. Very useful method to help you keep your application’s interface cross-platform. It can be used to insert line breaks on strings passed to message boxes or list boxes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"numberOf","(","String s, char c",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the number of occurrences of the specified char in the given string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"replace","(","String source, String from, String to",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Searches the string source for occurrences of the string from, replacing them by the string to.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tokenizeString","(","String input, char delim",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Tokenizes the given string using the given char as separator. The return is a string array with size equal to the number of tokens.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tokenizeString","(","String input, String delim",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Same as the above, but uses a String instead of a char as separator. Never use this method with 1 character length strings, like: ",Object(i.b)("inlineCode",{parentName:"td"},"String[] tokens = Convert.tokenizeString(input, “#”);"))))),Object(i.b)("p",null,"Use the previous method instead for better performance",Object(i.b)("strong",{parentName:"p"},":")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"toLowerCase(char c)")),": Converts the given char to lower case."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"toUpperCase(char c)")),": Converts the given char to upper case."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"zeroPad(String s, int size)")),": Pads the string, adding zeros at left."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"zeroUnpad(String s)")),": Removes left zeros of the string.")),Object(i.b)("h3",{id:"arrays"},Object(i.b)("strong",{parentName:"h3"},"Arrays")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"cloneStringArray","(","String","[","]"," strs",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns a copy of the given string array.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"toStringArray","(","Object","[","]"," objs",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Converts the given object array into a string array, by calling toString","(",")"," for each object.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"detectSortType","(","Object item",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the sort type for the given item sample ","(","which is usually the first item of an array",")",".")))),Object(i.b)("p",null,"Convert provides the quick sort algorithm for array sorting."),Object(i.b)("h3",{id:"constants"},"Constants"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_AUTODETECT")," - Chooses between one of the sort types below based on the first element of the array."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_OBJECT")," - The objects are compared by their string representation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_STRING")," - The array contains String objects, and the sort is case sensitive."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_INT")," - The array contains String objects that represents integer values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_DOUBLE")," - The array contains String objects that represents double values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_DATE")," - The array contains String objects that represents a Date object with day, month, and year."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_COMPARABLE")," - The array contains comparable objects ","(","objects that implements the ","*","*","*","*","Comparable interface",")","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SORT_STRING_NOCASE")," - The array contains String objects, and the sort is case insensitive, which is slower than case sensitive sorting.")),Object(i.b)("h3",{id:"methods-1"},Object(i.b)("strong",{parentName:"h3"},"Methods")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"qsort","(","Object","[","]"," items, int first, int last",")"," -")," Applies the quick sort algorithm to the elements of the given array, sorting in ascending order and sort type equals to SORT_AUTODETECT."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"qsort","(","Object","[","]"," items, int first, int last, int sortType",")")," - Same as the above method, but you can specify the sort type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"qsort","(","Object","[","]"," items, int first, int last, int sortType, boolean ascending",")")," - Same as the above, but you can also choose between sorting in ascending or descending order.")),Object(i.b)("h3",{id:"other-conversions-and-methods"},Object(i.b)("strong",{parentName:"h3"},"Other Conversions and Methods")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chars2int","(","String fourChars",")")," - Converts a creator id or type to int."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"int2chars","(","int i",")")," - Converts an int to a creator id or type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"doubleToIntBits","(","double f",")")," - Converts the given double to its bit representation in IEEE 754 format, using 4 bytes instead of 8 ","(","a conversion to float is applied",")","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"intBitsToDouble","(","int i",")")," - Converts the given IEEE 754 bit representation of a float to a double."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"doubleToLongBits","(","double value",")"),' - Returns a representation of the specified floating-point value according to the IEEE 754 floating-point "double format" bit layout.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"longBitsToDouble","(","long bits",")")," - Converts the given bit representation to a double."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rol","(","long i, int n, int bits",")")," - Does a rol of n bits in the given long. n must be ","<"," bits. Unlike the shift left operator ","(","<","<",")",", bits that would have been lost are reinserted in order at the right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ror","(","long i, int n, int bits",")")," - Does a ror of n bits in the given long. n must be ","<"," bits. Unlike the shift right operator ","(",">",">",")",", bits that would have been lost are reinserted in order at the left.")),Object(i.b)("h3",{id:"another-useful-constants"},Object(i.b)("strong",{parentName:"h3"},"Another Useful Constants")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"th"},"Constants")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRLF"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\\r\\n.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CRLF_BYTES"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"{’\\r’,’\\n’}")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MAX_SHORT_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum short value: 32767")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MIN_SHORT_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The minimum short value: -32768.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MIN_INT_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The minimum int value: -2147483648")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MAX_INT_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum int value: 2147483647.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MIN_LONG_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The minimum long value: -9223372036854775808.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MAX_LONG_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum long value: 9223372036854775807")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MAX_DOUBLE_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum double value: 9.007199254740992E15.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MIN_DOUBLE_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The minimum double value: 1.1102230246251565E-16.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MAX_DOUBLE_DIGITS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of digits in a double value, used when formatting to string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOUBLE_POSITIVE_INFINITY_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The double that represents a positive infinity.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOUBLE_NEGATIVE_INFINITY_VALUE"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The double that represents a negative infinity.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOUBLE_POSITIVE_INFINITY_BITS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The long whose bits represent a positive infinity.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOUBLE_NEGATIVE_INFINITY_BITS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The long whose bits represent a negative infinity.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOUBLE_NAN_BITS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The long whose bits represent a Not a Number ","(","NaN",")",".")))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/totalcross.sys.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-totalcross-sys-md-171260ffdb4037168805.js.map