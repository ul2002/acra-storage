function(doc) {
    if(doc.APP_NAME) {
        emit(doc.APP_NAME, 1);
    }
}