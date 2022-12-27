function feladat01(szinek) {

    if(szinek.length == 0 || szinek.length == 1) {
        return 0;
    }
    if(szinek.length == 2) {
        return 1;
    }
    if(szinek.length == 3) {
        return 4;
    }
    return ("Túl sok színt adtál meg.");
}