function render(el) {
	el.appendChild(createElement(view(0)))
}

function createElement(node) {
	if(typeof node === 'string'){
		return document.createTextNode(node)
	}
	const el = document.createElement(node.type)
	setProps(el, node.props)
	node.children.map(createElement).forEach(el.appendChild.bind(el))
	return el
}

function setProps(target, props) {
	
	Object.keys(props).forEach(name => {
		if(name ==='className')
		return target.setAttribute('class', props[name])
		target.setAttribute(name, props[name])
	})
}


function view(count) {//@
	return h('ul',{id: "cool", className: "foo"},
		h('li',{className: 'test'}, 'text 1'),
		h('li',null, 'text 2'),
	)
}

function h(type, props, ...children) {
	props = props || {}
	return {type, props, children: flatten(children) }
}

function flatten(arr) {
	return [].concat.apply([], arr)
}