const url = 'ROYERCV.pdf';
let pdfDoc = null,
    pageNum = 1,
    scale = 1.0,
    canvas = document.getElementById('pdf-canvas'),
    ctx = canvas.getContext('2d');

pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        page.render(renderContext);
    });
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
});

document.getElementById('next-page').addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
});

document.getElementById('zoom-in').addEventListener('click', () => {
    scale += 0.1;
    renderPage(pageNum);
});

document.getElementById('zoom-out').addEventListener('click', () => {
    if (scale <= 0.5) return;
    scale -= 0.1;
    renderPage(pageNum);
});

document.getElementById('print').addEventListener('click', () => {
    const dataUrl = canvas.toDataURL();
    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    const printWin = window.open('', '', 'width=600,height=700');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.close();
});
