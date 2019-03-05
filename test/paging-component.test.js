const test = QUnit.test;

QUnit.module('paging tests');

function pageMaker(fakeArray, paging) {
    const page = paging.page;
    const perPage = paging.perPage;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return fakeArray.slice(startIndex, endIndex);
}

test('test page 1 of 5 items per page', assert => {
    //arrange
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const paging = {
        page: 1,
        perPage: 5
    };
    //act
    const result = pageMaker(fakeArray, paging);
    //assert
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
});