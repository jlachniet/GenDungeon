import InputBox from './InputBox';
import KeyEvents from './KeyEvents';
import Log from './Log';

KeyEvents.addListener();

Log.clear();
Log.addEntry('Hello world!');

InputBox.focus();
