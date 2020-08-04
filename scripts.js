var div = document.createElement('div');
var container = document.querySelector('.container');

div.classList.add('child');
div.innerText = '0';

function prepend(container, child)
{
    container.insertBefore(child, container.firstChild);
}

function deleteTextNodes(element) {
    for (let node of element.childNodes) {
        if (node.nodeType === 3) {
            node.remove();
        }
    }
}

// function scanDom() {
//     let text = 0;
//     let div = 0;
//     function check(element)
//     {
//         for (let node of element) {
//             if (node.nodeType === 3) {
//                 text++;
//             }
//             if (node.tagName === 'DIV') {
//                 div++;
//                 return check(node);
//             }
//         }
//     }
//     check(document.body.childNodes);
//     console.log('text: ', text);
//     console.log('div: ', div);
// }

prepend(container, div);
deleteTextNodes(container);
// scanDom();
