import './style.css';
import { dropDownEvent, setDropDownContent } from './dropDown';

const dropDownBtn = document.querySelector('.drop_down_btn');
const dropDownContent = document.querySelector('.drop_down_content');

dropDownEvent(dropDownBtn);
setDropDownContent(dropDownContent);
