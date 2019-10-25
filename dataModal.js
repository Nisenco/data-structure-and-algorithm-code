//  栈
function Stack () {
	let items = [];
	this.push = function(ele){
		items.push(ele);
	},
	this.pop = function(){
		return item.pop();
	}
	// 查看栈顶
	this.peek = function(){
		return items[items.length-1];
	}
	// 检查栈是否为空
	this.isEmpty = function(){
		return items.length == 0;
	}
	// 栈的长度
	this.size = function(){
		return items.length;
	}
	// 清空栈数据
	this.clear = function(){
		items = [];
	},
	// 打印栈
	this.print = function(){
		console.log(items);
	}
}
function divideBy2(decNumber){
	var remStack = new Stack(),rem,binaryString = '';
	while(decNumber >0){
		rem = Matn.floor(decNumber%2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber/2);
	}
	while(!remStack.isEmpty()){
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}

// 队列
function Queue(){
	let items = [];
	this.enqueue = function (ele) {
		items.push(ele); 
	}
	this.dequeue = function(){
		return items.shift();
	}
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length == 0;
	}
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items,'Queue-print');
	}
}

function PriorityQueue(){
	let items = [];
	function QueueElement(ele,priority){
		this.element = ele;
		this.priority = priority;
	}
	this.enqueue = function(ele,priority){
		let queueElement = new QueueElement();
		let added = false;
		for (let i = 0; i < items.length; i++) {
			if(queueElement.priority < items[i].priority){
				items.splice(i,0,queueElement);
				added = true;
				break;
			}
		}
		if(!added){
			items.push(queueElement);
		}
	}
	this.dequeue = function(){
		return items.shift();
	}
	this.front = function(){
		return item[0];
	}
	this.isEmpty = function(){
		return items.length == 0;
	}
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		for (let i = 0; i<items.length; i++) {
			console.log(items[i],'print-queue');
		}
	}
}

// 击鼓传花游戏
function hotPotato (nameList,num){
	let queue = new Queue();
	for(let i = 0; i< nameList.length; i++){
		queue.enqueue(nameList[i]);
	}
	let eliminated = '';
	while(queue.size() > 1){
		for(let i = 0; i < num; i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(`${eliminated}: was eliminated from the Hot Potato game`);
	}
	return queue.dequeue();
}

// 单项链表
function LinkedList(){
	let Node = function(ele){
		this.element = ele;
		this.next = null;
	};
	let length = 0;
	let head = null;
	// 向列表尾部添加一个新的项
	this.append = function (element){
		let node = new Node(element),;
		if(head === null){
			head = null;
		}else{
			current = head;
			// 循环列表 ，直到找到最后一项
			while(current.next){
				current = current.next;
			}
			// 找到最后一项，将其next 赋值为 node,建立链接
			current.next = node;
		}
		length++;
	};
	// 向列表的任意位置插入新的项
	this.insert = function(position,element){
		if(position> -1 && position <length){
			let node = new Node(element),previous,current = head,index = 0;
			if(position == 0){
				node.next = current;
				head = node;
			}else{
				while(index ++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			// 更新链表长度
			length ++;
			return true;
		}else{
			return false;
		}
	};
	// 从列表的特定位置移除一项
	this.removeAt = function(position){
		// 越界检查
		if(position> -1 && position < length){
			let corrent = head,previous,index = 0;
			// 移除第一项
			if( position == 0){
				head = current.next;
			}else{
				while( index ++ < position){
					previous = current;
					current = current.next;
				}
				// 将previous 与current 的下一项链接起来，跳过current,从而移除它
				previous.next = current.next;
			}
			length --;
			return current.element;
		}else{
			return null;
		}
	};
	// 从列表移除一项
	this.remove = function(element){
		let index = this.indexOf(element);
		return this.removeAt(index);
	};
	// 返回元素在列表中的索引。如果列表中没有该元素则返回-1
	this.indexOf = function(element){
		let current = head,index = -1;
		while(current){
			if(element == current.element){
				return index;
			}
			current = current.next;
			index ++;
		}
		return -1;
	};
	// 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
	this.isEmpty = function(){
		return length == 0;
	};
	// 返回链表包含的元素个数。
	this.size = function(){
		return length;
	};
	this.getHead = function(){
		return head;
	};
	this.toString = function(){
		let current = head;
		let str = '';
		while(current){
			str += current.element +(current.next? 'n' : '');
			current = current.next; 
		}
		return str;
	};
	this.print = function(){

	};
}

// 双向链表
function DoublyLinkedList (){
	let  Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null; // 新增
	} 

	let length = 0;
	let head = null;
	let tail = null;
	this.insert = function(position,element){
		// 检查值是否越界
		if(position >= 0 && position <= element){
			let node = new Node(element),current = head,previous,index = 0;
			if(position == 0){ // 在第一个位置添加
				if(!head){
					head = node;
					tail = node;
				}else{
					node.next = current;
					current.prev = node;
					head = node;
				}
			}else if(position == length){ //在最后的位置添加
				current = tail;
				current.next= node;
				node.prev = current;
				tail = node;
			}else{ // 在中间位置添加
				while(index++ <position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;

				// 新增
				current.prev = node;
				node.prev = previous;
			}
			length ++;
			return true;
		}else{
			return null;
		}
	}
	this.removeAt = function(position){
		if(position>-1 && position < length){
			let current = head,previous,index;
			if(position == 0){
				head = current.next;
				// 如果只有一项 ，更新tail
				if(lenght == 1){
					tail = null;
				}else{
					// 更新 prev
					head.prev = null;
				}
			}else if(position == length-1){
				current = tail;
				tail = current.prev;
				tail.next = null;
			}else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			length--;
			return current.element;
		}else{
			return null;
		}
	}
}
// 集合 是一组无序且唯一（不能重复）的项组成
// 创建集合
function Set(){
	let items = {};
	// this.has = function(value){
	// 	return value in items
	// } 
	// 或
	this.has =function(value){
		return items.hasOwnProperty(value);
	}
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false
	}
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function(){
		return Object.keys(items).length;
	}
	this.value = function(){
		let values = [];
		for(let key in items){
			if(items.hasOwnProperty(key)){
				values.push(items[key]);
			}
		}
		return values;
	}
	// 并集
	this.union = function(){
		let unionSet = new Set();// 创建新的Set 实例
		let values = this.values();
		for(let i = 0;i<values.length;i++){
			
		}
	}
	// 子集
	this.subset = function(otherSet){
		let values = this.values();
		if(this.size() > otherSet.size()){
			return false;
		}else{
			for(let i = 0;i<values.length;i++){
				if(!otherSet.has(values[i])){
					return false;
				}
			}
			return true;
		}
	}
}
// 字典 和散列表都是用来存储唯一值（不重复）的数据结构
function Dictionary(){
	var items = {};
	this.has = function(key){
		return key in items;
	};
	this.set = function(key,value){
		items[key] = value;
	}
	this.delete = function(key){
		if(this.has(key)){
			delete item[key];
			return true;
		}
		return false;
	}
	this.get = function(key){
		return this.has(key) ? items[key]: undefined;
	}
	this.values = function(){
		return Object.values(items);
	}
	// 或者
	// this.values = function(){
	// 	var values = [];
	// 	for(var key in item){
	// 		if(this.has(key)){
	// 			values.push(item[key]);
	// 		}
	// 	};
	// 	return values;
	// }
	this.keys = function(){
		return Object.keys(items);
	}
	this.clear = function(){
		items = {};
	}
	this.size = function (){
		return Object.keys(items).length;
	}
	this.getItems = function(){
		return items;
	}

}
// 散列函数  hashTable
function HashTable(){
	let table = [];
	var loseloseHashCode = function(key){
		for (var i = 0; i < key.length; i++) {
			hash +=key.chartCodeAt(i);
		}
		return hash % 37;
	},
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		table[key] = value;
	},
	this.get = function(key){
		return table[loseloseHashCode(key)];
	},
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	}
}

// 使用了分离链接法来处理冲突的HashMap实例 散列表和散列集合
function separationLink(){
	let table = [];
	var loseloseHashCode = function(key){
		for (var i = 0; i < key.length; i++) {
			hash +=key.chartCodeAt(i);
		}
		return hash % 37;
	},
	var ValuePair = function(key,value){
		this.key = key;
		this.value = value;
		this.toString = function(){
			return `[${this.key}-${this.value}]`;
		}
	}
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		if(table[position] == undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key,value));
	},
	this.get = function(key){
		// return table[loseloseHashCode(key)];
		var position = loseloseHashCode(key);
		if(table[position] !== undefined){
			// 遍历链表寻找 键/值
			var current = table[position].getHead();
			while(current.next){
				if (current.element.key === key) {
					return current.element.value
				}
				current = current.next;
			}
			// 检查元素在链表第一个或最后一个节点的情况
			if(current.element.key === key){
				return current.element.value
			}
		}
		return undefined;
	},
	this.remove = function(key){
		var position = loseloseHashCode(key);
		if(table[position] !== undefined){
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key == key){
					table[position].remove(current.element);
					if(table[position].isEmpty()){
						table[position] = undefined;
					}
					return true
				}
				current = current.next;
			}

			// 检查是否为第一个或最后一个
			if( current.element.key === key){
				table[position].remove(current.element);
				if(table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}
		return false;
	}
}

// 线性探查法 HashMap 冲突
function LinearDetection(){
	let table = [];
	var loseloseHashCode = function(key){
		for (var i = 0; i < key.length; i++) {
			hash +=key.chartCodeAt(i);
		}
		return hash % 37;
	},
	var ValuePair = function(key,value){
		this.key = key;
		this.value = value;
		this.toString = function(){
			return `[${this.key}-${this.value}]`;
		}
	},
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		if(table[position] == undefined){
			table[position] = new ValuePair(key,value);
		}else{
			var index = ++position;
			while(table[index] != undefined){
				index++;
			}
			table[index] = new ValuePair(key,value);
		}
	},
	this.get = function(key){
		var position = loseloseHashCode(key);
		if(table[position] !== undefined){
			if(table[position].key == key){
				return table[position].value
			}else{
				var index = ++position;
				while(table[index] === undefined || table[index].key !== key){
					index++;
				}	
				if(table[index].key === key){
					return table[index].value;
				}
			}
			
		}
		return undefined;
	},
	this.remove = function(key){
		var position = loseloseHashCode(key);
		if(table[position] !== undefined){
			if(table[position].key == key){
				return undefined;
			}else{
				var index = ++position;
				while(table[index] === undefined || table[index].key !== key){
					index++;
				}	
				if(table[index].key === key){
					return undefined;
				}
			}
			
		}
		return undefined;
	}
}
//  二叉搜索树
function BinarySearchTree(){
	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right  = null;
	};
	var root = null;
	var insertNode = function(node,newNode){
		if(newNode.key<node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}
	this.insert = function(key){
		var newNode = new Node(key);
		if(root == null){
			root = newNode;
		}else{
			insertNode(root,newNode);
		}
	}
	//  树的遍历 有三种方法：中序，先序，后序
	// 中序遍历
	var inOrderTraverseNode = function(node,callback){
		if(node !== null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	}
	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root,callback);
	}
	// 先序遍历 先序遍历是以优先于后代节点的顺序访问每个节点的
	var preOrderTraverseNode = function(node,callback){
		if(node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	}
	this.preOrderTraverse = function(callback){
		preOrderTraverseNode (root,callback);
	}
	// 后序遍历 后序遍历则是先访问节点的后代节点，再访问节点本身。后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小
	var postOrderTraverseNode = function(node,callback){
		if(node.key !== null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	}
	this.postOrderTraverse = function(callback){
		postOrderTraverseNode (root,callback);
	}
	// 搜索树种的值 ，在树种，有三种经常执行的搜索类型
	// 1 搜索最小值，2 搜索最大值，3 搜索特定值
	// 1 搜索最小值
	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	};
	this.min = function(){
		return minNode(root);
	}
	// 2 搜索最大值
	var maxNode = function(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	};
	this.max = function(){
		return maxNode(root);
	}
	// 3 搜索特定值
	var  searchNode = function(node,key){
		if(node === null){
			return false;
		}
		if(key < node.left){
			return searchNode(node.left,key);
		}else if(key >node.right){
			return searchNode(node.left,key);
		}else{
			return true
		}
	};
	this.search = function(key){
		return searchNode(root,key);
	}
	// 移除一个节点
	var removeNode = function(key){
		
		console.log('231');

	}
	this.remove = function(key){
		root =removeNode(key);
	}
} 


// 排序算法
// 冒泡排序算法  时间复杂度 为O（n^2）
var bubbleSort = function (ary){
	var length = ary.length;
	for(var i = 0;i <length; i++){
		for(var j =0; j<length-1-i; j++ ){
			if(ary[j] > ary[j+1]){
				[ary[j+1],ary[j]] = [ary[j],ary[j+1]];
			}
			
		}
	}
	return ary;
}
// 选择排序算法
// 大致思路为 找到数据结构中 最小值并将其放到第一位，接着找到第二小的放到第二位
//  时间复杂度为 O(n^2)
var selectSort = function(ary){
	var length = ary.length,indexMin;
	for(var i = 0; i<length;i++){
		indexMin = i;
		for(var j =i; j<length;j++){
			if(ary[indexMin] >  ary[j]){
				indexMin = j;  // 找到 最小的index
			}
		};
		if(indexMin != i){
			[ary[i],ary[indexMin]] = [ary[indexMin],ary[i]];
		}
	}
}
// 插入排序
// 插入排序每次排一个数组项 以此方式构建最后的排序数组
var insertSort = function(ary){
	var length = ary.length,i,j,temp;
	for(i = 1;i<length;i++){
		j = i;
		temp = ary[i];
		while( j>0 && ary[j-1] > temp ){
			ary[j] = ary[j-1];
			j--;
		}
		ary[j] = temp;
	}
}
// 归并排序
// 归并排序时间复杂度 为 O（nlogn）
// 归并算法 是一种分治算法，其思想是将算是数组切成较小的数组，直至每个小数组只有一个位置，接着将小数组归并为较大的数组，直至最后只有一个排序完毕的大数组
var mergeSort= function(ary){
	var _ary = mergeSortRec(ary);
	return _ary;
}
var mergeSortRec = function(ary){
	var length = ary.length;
	if(length === 1){
		return ary;
	}
	var mid = Math.floor(length/2),
	left = ary.splice(0,mid);
	right = ary.splice(mid,length);
	return merge(mergeSortRec(left),mergeSortRec(right));
}
var merge = function(left,right){
	var result = [],
	il = 0,ir = 0;
	while(il <left.length && ir<right.length){
		if(left[il] < right[ir]){
			result.push(left[il++]);
		}else{
			result.push(right[ir++]);
		}
	}
	while(il < left.length){
		result.push(left[il++]);
	}
	while(ir < right.length){
		result.push(right[ir++]);
	}
	return result;
}
// 快速排序
//  快速排序使用分治思想
var quickSort = function(ary){
	quick(ary,0,ary,length-1);
}
var quick = (ary,left,right) => {
	var index;
	if(ary.length > 1){
		index = partition(ary,left,right);
		if(left < index-1){
			quick(ary,left,index-1);
		}else{
			quick(ary,index,right);
		}
	}
}
var partition = function(ary,left,right){
	var pivot = ary[Math.floor((left+right)/2)], // 选择中间项作为主元；
	 i = left,
	 j = right;
	 while(i<=j){
		while(ary[i] < ary[pivot]){
			i++;
		}
		while(ary[j] > ary[pivot]){
			j--;
		}
		if(i <= j){
			[ary[i],ary[j]] = [ary[j],ary[i]];
			i++;
			j--;
		}
	}
	return i;
}
//  二分查找
var binarySearch = function(ary,item){
	var _ary = quickSort(ary);
	var low = 0,high = ary.length-1,mid,ele;
	while(low <= height){
		mid = Math.floor((low+high)/2);
		ele = ary[mid];
		if(ele < item){
			low = mid + 1;
		}else if(ele > item){
			high = mid -1
		}else{
			return mid;
		}
	}
	return -1;
}

// 二叉树  复习
function BinarySearchTree(){
	var Node = function (key){
		this.key = key;
		this.left = null;
		this.right = null;
	};
	var root = null;
	this.insert = function(key){
		var newNode = new Node(key);
		if(root === null){
			root  = newNode;
		}else{
			insertNode(root,newNode);
		}
	}
	var insertNode = function (node,newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}

	// 中序遍历 就是从小到大的顺序访问所有节点 一种应用是对树的排序操作 
	this.inOrderTraverse = function (callback){
		inOrderTraverseNode(root,callback);
	}
	var inOrderTraverseNode = function(node,callback){
		if(node !== null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	}

	// 先序遍历  就是优先于后代节点的顺序访问每个节点 先序遍历的一种应用是打印一个结构化的文档
	this.preOrderTraverse = function(callback){
		preOrderTraverseNode(root,callback);
	};
	var preOrderTraverseNode = function (node,callback){
		if(node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	}
	// 后序遍历 就是先访问后代节点 然后在访问节点本身。 后序遍历的一种应用 就是计算一个目录和其子目录中所有文件所占的空间大小
	this.postOrderTraverse = function(callback){
		postOrderTraverseNode (root, callback);
	}
	var postOrderTraverseNode = function(node,callback){
		if(node !== null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	}
	//  获取树的最小节点
	this.min = function(){
		return minNode(root);
	}
	var minNode = function(node){
		if(node){
			while(node && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}
	//  获取树的最大节点
	this.max = function(){
		return maxNode(node);
	}
	var maxNode = function(node){
		if(node){
			while(node && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}
	// 搜索一个特定值
	this.search = function(key){
		return searchNode(root,key);
	}
	var searchNode = function (node,key){
		if(node === null) return false;
		if(node.key > key){
			return searchNode(node.left,key);
		}else if(node.key < key){
			return searchNode(node.right,key);
		}else{
			return true;
		}
	}
	// 移除一个节点
	this.remove = function(key){
		root  = removeNode(root ,key);
	}
	var removeNode = function (node,key){
		if(node === null) return null;
		// if(){

		// }
	}
}
//  数据结构 图 是一组由边 连接的 节点；
// 图相关的概念 
// 相邻顶点 由一条边连接在一起的顶点
// 一个顶点的度  是其相邻顶点的数量 

function Graph(){
	var vertices = []; // 存放图中所有顶点的名字
	var adjList = new Dictionary(); // 字典存储邻接表， 字典将会使用顶点的名字作为键，邻接顶点列表作为值
	// 向图中添加一个新的顶点
	this.addVertex = function(v){
		vertices.push(v);
		adjList.set(v,[]);
	}
	this.addEdge = function(v,w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}
	// this.toString = function(){

	// }
}
// 图的遍历
// 两种算法可以对图进行遍历 ： 广度优先（Breadth-First Search,BFS） 和 深度优先(Depth-First Search  DFS)
// 图的遍历可以用来寻找 特定的顶点或 两个顶点之间的路径，检查图是否连通，检查是否含有环等











