let dropDownContent;
export function setDropDownContent(contentDiv) {
    dropDownContent = contentDiv;
    dropDownContent.style.visibility = 'hidden';
}

let isVisible = false;
function showDropDown() {
    dropDownContent.style.visibility = 'visible';
}
function hideDropDown() {
    dropDownContent.style.visibility = 'hidden';
}
export function dropDownEvent(dropDownBtn) {
    if (dropDownBtn) {
        dropDownBtn.onclick = () => {
            isVisible = isVisible === false ? true : false;
            if (isVisible) {
                showDropDown();
            }
            if (!isVisible) {
                hideDropDown();
            }
        };
    }
}
