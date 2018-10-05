/*****************************************************
    MEDIA QUERIES
******************************************************
If the viewport is >= 900px in width, add the following styles:
    1.  #mainContainer margin-left = 250px
    2.  #sidebar-container width = 250px
    3.  #Burger-Component display = none
    4.  #cross-button display = none
*/

const largeScreenDesign = (screenW, stylesAdded) => {

    const main = document.getElementById("mainContainer");
    const sidebar = document.getElementById("sidebar-container");
    const cross_button = document.getElementById("cross-button");
    const burger_button = document.getElementById("burger-button");

    // eslint-disable-next-line
    screenW.matches ?
    (
        main.style.marginLeft = "250px",
        sidebar.style.width = "250px",
        cross_button.style.display = "none",
        burger_button.style.display = "none"
    ) :
    (
        main.style.marginLeft = "0px",
        sidebar.style.width = "0px",
        cross_button.style.display = "inline",
        burger_button.style.display = "grid"
    );
};
/******************************************************
    END OF MEDIA QUERIES
*******************************************************/

export { largeScreenDesign };
