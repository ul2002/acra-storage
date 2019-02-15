function(doc) {
    if(doc.LEVEL) {
        emit(doc.LEVEL, 1);
    }
}