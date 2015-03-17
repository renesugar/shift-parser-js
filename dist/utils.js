"use strict";

exports.isStrictModeReservedWord = isStrictModeReservedWord;
exports.getHexValue = getHexValue;
/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _esutils = require("esutils");

var keyword = _esutils.keyword;
var code = _esutils.code;
var isReservedWordES6 = keyword.isReservedWordES6;
var isRestrictedWord = keyword.isRestrictedWord;
var isIdentifierStartES6 = code.isIdentifierStartES6;
var isIdentifierPartES6 = code.isIdentifierPartES6;
var isWhiteSpace = code.isWhiteSpace;
var isLineTerminator = code.isLineTerminator;
var isDecimalDigit = code.isDecimalDigit;
exports.isRestrictedWord = isRestrictedWord;
exports.isIdentifierStart = isIdentifierStartES6;
exports.isIdentifierPart = isIdentifierPartES6;
exports.isWhiteSpace = isWhiteSpace;
exports.isLineTerminator = isLineTerminator;
exports.isDecimalDigit = isDecimalDigit;

function isStrictModeReservedWord(id) {
  return isReservedWordES6(id, true);
}

function getHexValue(rune) {
  if ("0" <= rune && rune <= "9") {
    return rune.charCodeAt(0) - 48;
  }
  if ("a" <= rune && rune <= "f") {
    return rune.charCodeAt(0) - 87;
  }
  if ("A" <= rune && rune <= "F") {
    return rune.charCodeAt(0) - 55;
  }
  return -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQThCZ0Isd0JBQXdCLEdBQXhCLHdCQUF3QjtRQUl4QixXQUFXLEdBQVgsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBbEJDLFNBQVM7O0lBQTdCLE9BQU8sWUFBUCxPQUFPO0lBQUUsSUFBSSxZQUFKLElBQUk7SUFFYixpQkFBaUIsR0FBdUIsT0FBTyxDQUEvQyxpQkFBaUI7SUFBRSxnQkFBZ0IsR0FBSyxPQUFPLENBQTVCLGdCQUFnQjtJQUNuQyxvQkFBb0IsR0FBMEUsSUFBSSxDQUFsRyxvQkFBb0I7SUFBRSxtQkFBbUIsR0FBcUQsSUFBSSxDQUE1RSxtQkFBbUI7SUFBRSxZQUFZLEdBQXVDLElBQUksQ0FBdkQsWUFBWTtJQUFFLGdCQUFnQixHQUFxQixJQUFJLENBQXpDLGdCQUFnQjtJQUFFLGNBQWMsR0FBSyxJQUFJLENBQXZCLGNBQWM7UUFHL0YsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQUNRLGlCQUFpQixHQUF6QyxvQkFBb0I7UUFDRyxnQkFBZ0IsR0FBdkMsbUJBQW1CO1FBQ25CLFlBQVksR0FBWixZQUFZO1FBQ1osZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixjQUFjLEdBQWQsY0FBYzs7QUFHVCxTQUFTLHdCQUF3QixDQUFDLEVBQUUsRUFBRTtBQUMzQyxTQUFPLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNwQzs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDaEMsTUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDOUIsV0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztHQUNoQztBQUNELE1BQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO0FBQzlCLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7R0FDaEM7QUFDRCxNQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUM5QixXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0dBQ2hDO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYIiwiZmlsZSI6InNyYy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTQgU2hhcGUgU2VjdXJpdHksIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge2tleXdvcmQsIGNvZGV9IGZyb20gXCJlc3V0aWxzXCI7XG5cbmNvbnN0IHsgaXNSZXNlcnZlZFdvcmRFUzYsIGlzUmVzdHJpY3RlZFdvcmQgfSA9IGtleXdvcmQ7XG5jb25zdCB7IGlzSWRlbnRpZmllclN0YXJ0RVM2LCBpc0lkZW50aWZpZXJQYXJ0RVM2LCBpc1doaXRlU3BhY2UsIGlzTGluZVRlcm1pbmF0b3IsIGlzRGVjaW1hbERpZ2l0IH0gPSBjb2RlO1xuXG5leHBvcnQge1xuICBpc1Jlc3RyaWN0ZWRXb3JkLFxuICBpc0lkZW50aWZpZXJTdGFydEVTNiBhcyBpc0lkZW50aWZpZXJTdGFydCxcbiAgaXNJZGVudGlmaWVyUGFydEVTNiBhcyBpc0lkZW50aWZpZXJQYXJ0LFxuICBpc1doaXRlU3BhY2UsXG4gIGlzTGluZVRlcm1pbmF0b3IsXG4gIGlzRGVjaW1hbERpZ2l0LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaWN0TW9kZVJlc2VydmVkV29yZChpZCkge1xuICByZXR1cm4gaXNSZXNlcnZlZFdvcmRFUzYoaWQsIHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGV4VmFsdWUocnVuZSkge1xuICBpZiAoXCIwXCIgPD0gcnVuZSAmJiBydW5lIDw9IFwiOVwiKSB7XG4gICAgcmV0dXJuIHJ1bmUuY2hhckNvZGVBdCgwKSAtIDQ4O1xuICB9XG4gIGlmIChcImFcIiA8PSBydW5lICYmIHJ1bmUgPD0gXCJmXCIpIHtcbiAgICByZXR1cm4gcnVuZS5jaGFyQ29kZUF0KDApIC0gODc7XG4gIH1cbiAgaWYgKFwiQVwiIDw9IHJ1bmUgJiYgcnVuZSA8PSBcIkZcIikge1xuICAgIHJldHVybiBydW5lLmNoYXJDb2RlQXQoMCkgLSA1NTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG4iXX0=