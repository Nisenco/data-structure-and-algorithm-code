// 1 两数求和问题
// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
var twoSum = function(ary, target) {
    let result = {};
    let current;
    ary.map((value, index) => {
        if (result[target - value] != undefined) {
            return current = [result[target - value], index];
        }
        result[value] = index;
    });
    return current;
}
// var num = [2,7,11,15] 
// twoSum(num,9)

// 2 合并两个有序数组
// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]
var merge = function(num1, m, num2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (num1[i] >= num2[j]) {
            num1[k] = num1[i];
            i--;
        } else {
            num1[k] = num2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        num1[k] = num2[j];
        k--;
        j--;
    }
}

// 3 三数求和

// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

var threeSum = (nums) => {
    let res = [];
    // 数组排序
    nums = nums.sort((a, b) => (a - b));
    const len = nums.length;

    for (var i = 0; i < len - 2; i++) {
        // 左指针
        let j = i + 1;
        // 右指针
        let k = len - 1;
        // 遇到重复数字  跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        while (j < k) {
            if (nums[i] + nums[j] + num[k] < 0) {
                j++;
                // 处理左指针元素重复的情况
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + num[k] > 0) {
                k--;
                // 处理指针元素重复的情况
                while (j < k && nums[k] === nums[k + 1]) {
                    k++;
                }
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                // 处理左指针元素重复的情况
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                // 处理指针元素重复的情况
                while (j < k && nums[k] === nums[k + 1]) {
                    k++;
                }
            }
        }
    }
    return res;
}


// 判断字符串是不是回文字符
function isPalindrome(str) {
    // 先反转字符串
    const reversedStr = str.split('').reverse().join('')
    // 判断反转前后是否相等
    return reversedStr === str
}

function isPalindrome(str) {
    // 缓存字符串的长度
    const len = str.length
    // 遍历前半部分，判断和后半部分是否对称
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false
        }
    }
    return true
}


// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

var validPalindrome = function(s) {
    const len = s.length;
    let i = 0,
        j = len - 1;
    while(i < j && s[i] === s[j]) {
        i++;
        j--;
    }
    if (isPalindrome(i, j - 1)) {
        return true
    }
    if (isPalindrome(i + 1, j)) {
        return true;
    }

    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false;
            }
            st++;
            ed--;
        }
        return true;
    }
    return false;
}


// 真题描述： 设计一个支持以下两种操作的数据结构：

// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

// 示例:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// 说明:
// 你可以假设所有单词都是由小写字母 a-z 组成的

const WordDictionary = function() {
    this.words = {};
}
WordDictionary.prototype.addWord = function(word) {
    if (this.words[word.length]) {
        this.words[word.length].push(word);
    } else {
        this.words[word.length] = [word];
    }
};

wordDictionary.prototype.search = function(word) {
    if (!this.words[word.length]) {
        return false;
    }
    const le = word.length;
    if (!word.include('.')) {
        return this.words[len].include(word);
    }
    const reg = new RegExp(word);
    return this.words[len].some((item) => {
        return reg.test(item);
    });
}

// ********************链表的使用*****************
// 链表的合并

// 1 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function ListNode(value) {
    this.value = value;
    this.next = null;
}

const mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    let cur = head;
    while (l1 && l2) {
        if (l1.value <= l2.value) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 !== null ? l1 : l2;
    return head.next;
}

// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

const deleteDuplicates = function(head) {
    let cur = head;
    while (cur != null && cur.next != null) {
        if (cur.value == cur.next.value) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}


// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5

const deleteDuplicates2 = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dumy = new ListNode();
    dumy.next = head.next;
    let cur = dumy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let val = cur.next.val;
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while (cur.next && cur.next.val === val) {
                // 若有，则删除
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next;
        }
    }
    return dumy.next;
}

/*********************快慢指针与多指针***************/


// 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.

const removeNthFromEnd = function(head, n) {
    let dumy = new ListNode();
    dumy.next = head;

    let fast = dumy;
    let slow = dumy;

    while (n != 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dumy.next;
}


// 完全反转一个链表
// 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const reverseList = function(head) {
    let pre = null;
    let cur = head;
    while (cur != null) {
        let next = cur.next;
        cur.next = pre;

        pre = cur;
        cur = next;
    }
    return pre;
}

// 局部反转一个链表
// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:

// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

const reverseBetween = function(head, m, n) {
    let pre, cur, leftHead;
    const dumy = new ListNode();
    dumy.next = head;
    let p = dumy;
    for (let i = 0; i < m - 1; i++) {
        p = p.next;
    }
    leftHead = p;
    let start = leftHead.next;
    pre = start;
    cur = pre.next;

    for (let i = m; i < n; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    leftHead.next = prev;
    start.next = cur;
    return dummy.next;
}

const findlowestString = (str) => {
    var _str = str;
    _str = _str.split('');
    let _obj = {};
    _str.forEach((item) => {
        if (_obj[item]) {
            _obj[item]++;
        } else {
            _obj[item] = 1;
        }
    });
    console.log(_obj);
    console.log(Object.values(_obj));
    let _min = Math.min(...Object.values(_obj));
    console.log(_min);
}

findlowestString('aabbc')

// 真题描述：给定一个链表，判断链表中是否有环。

// 示例 1：

// 输入：[3,2,0,4]（链表结构如下图） 输出：true
// 解释：链表中存在一个环

// 入参是头结点 

const hasCycle = function(head) {
    while (head) {
        if (head.flag) {
            return true;
        } else {
            head.flag = true;
            head = head.next;
        }
    }
    return false;
}

// 环形链表衍生问题——定位环的起点

// 真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

const detectCycle = function(head) {
    while (head) {
        if (head.flag) {
            return head;
        } else {
            head.flag = true;
            head = head.next;
        }
    }
    return null;
};


/******************栈和队列的使用****************************/


// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
};

const isValid = function(s) {
    if (!s) {
        return true;
    }

    const stack = [];
    const len = s.length;
    for (let i = 0; i < len; i++) {
        let ch = s[i];
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(leftToRight[ch]);
        } else {
            if (!stack.length || stack.pop() != ch) {
                return false;
            }
        }
    }
    return !stack.length;
}


// 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
const dailyTemperatures = function(T) {
    const len = t.length;
    const stack = [];
    const res = (new Array(len)).fill(0);
    for (let i = 0; i < len; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let top = stack.pop();
            res[i] = i - top;
        }
        stack.push(i);
    }
    return res;
}

// 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。(push,pop,top,getMin)
const minStick = function() {
    this.stack = [];
}
minStick.prototype.pop = function() {
    return this.stack.pop();
}

minStick.prototype.push = function(value) {
    this.stack.push(value);
}
minStick.prototype.top = function() {
    if (!this.stack || !this.stack.length) {
        return;
    };
    return this.stack[this.stack.length - 1];
}
// 此方法的时间复杂度为 n
minStick.prototype.getMin = function() {
    let minValue = Infinity;
    let len = this.stack.length;
    for (let i = 0; i < len; i++) {
        if (minValue > this.stack[i]) {
            minValue = this.stack[i];
        }
    }
    return minValue;
}


/*******/
// 如何用栈实现一个队列？
// 题目描述：使用栈实现队列的下列操作：

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。

const MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
}
MyQueue.prototype.pop = function() {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
}
MyQueue.prototype.peek = function() {
    if (this.stack2.length <= 0) {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    const stack2Len = this.stack2.length;
    return stack2Len && this.stack2[stack2Len - 1];
};
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length;
}

// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

// 1 双指针+遍历法
let maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    const res = [];
    let left = 0;
    let right = k - 1;
    while (right < len) {
        let max = callMax(nums, left, right);
        res.push(max);
        left++;
        right++;
    }
    return res;
}
// 这个函数用来计算最大值
function calMax(arr, left, right) {
    if (!arr || !arr.length) {
        return;
    }
    let maxNum = arr[left];
    for (let i = left; i <= right; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

// 双端队列法
let maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    const res = [];
    const deque = [];
    for (let i = 0; i < len; i++) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    return res;
}

/*************深度优先搜索 DFS和BFS**********************/


// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列
// 示例：   
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]
let permute = function(nums) {
    const len = nums.length;
    const curr = [];
    const res = [];
    const visited = {};

    function dfs(nth) {
        if (nth == len) {
            res.push(curr.slice());
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = 1;
                curr.push(nums[i]);
                dfs(nth + 1);
                curr.pop();
                visited[nums[i]] = 0
            }
        }
    }
    dfs(0);
    return res;
}

function BFS(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const top = queue[0];
        console.log(top.val);
        if (top.left) {
            queue.push(top.left);
        }
        if (top.right) {
            queue.push(top.right);
        }
        queue.shift();
    }
}
// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
const subsets = function(nums){
    const res = [];
    const len = nums.length;
    const  subset = [];
    dfs(0);
    function dfs(index) {
        res.push(subset.slice());
        for(let i = index;i<len;i++){
            subset.push(nums[index]);
            dfs(i+1);
            subset.pop();
        }
    }
    return res;
}

// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
const combine = function(n,k){
    const res = [];
    const subset = [];
    dfs(1);
    function dfs(index){
        if(subset.length == k){
            res.push(subset.slice());
            return;
        }
        for(let i = index;i<n;i++){
            subset.push(i);
            dfs(i+1);
            subset.pop();
        }
    }
    return res;
}

// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
// 输入: [1,null,2,3]

// 1   
//  \   
//   2   
//  /  
// 3 
// 输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 先序遍历迭代实现
const preorderTraversal = function(root) {
    const res = [];
    if(!root){
        return res;
    }
    const stack = [];
    stack.push(root);
    while(stack.length){
        const cur = stack.pop();
        res.push(cur.val);
        if(cur.right){
            stack.push(cur.right);
        }
        if(cur.left){
            stack.push(cur.left);
        }
    }
    return res;
}
// 后序遍历迭代实现
const postorderTraversal = function(root){
    const res = [];
    const stack = [];
    while (stack.length){
        const cur = stack.pop();
        res.unshift(cur.val);
        if(cur.right){
            stack.push(cur.right);
        }
        if(cur.left){
            stack.push(cur.left);
        }
    }
    return res;
}

// 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

// 示例：

// 二叉树：[3,9,20,null,null,15,7],

//   3
//  / \
// 9  20
//   /  \
//  15   7
// 返回其层次遍历结果：

// [
// [3],
// [9,20],
// [15,7]
// ]

const levelOrder = function(root){
    const res = [];
    if(!root){
        return res;
    }
    const queue = [];
    queue.push(root);
    while(queue.length){
        const level = [];
        const len = queue.length;
        for(let i = 0;i<len;i++){
            const top = queue.shift();
            level.push(top.val);
            if(top.left){
                queue.push(top.left)
            }
            if(top.right){
                queue.push(top.right);
            }
        }
        res.push(level)
    }
    return res;
}

// 翻转二叉树
const invertTree = function(root) {
    if(!root){
        return root;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.right = left;
    root.left = right;
    return root;
}

// 二叉搜索树（ BST）
const search = function(root,n){
    if(!root){
        return ;
    }
    if(root.val === n){
        console.log('目标结果',root);
    }else if(root.val>n){
        search(root.left,n);
    }else{
        search(root.right,n);
    }
}
function TreeNode(val=0, left=null, right=null) {
    this.val =  val;
    this.left = left;
    this.right =  right;
}
const insertIntoBST = function(root,n){
    if(!root){
        root = new TreeNode(n);
        return root;
    }
    if(root.val > n){
        root.left = insertIntoBST(root.left,n);
    }else{
        root.right = insertIntoBST(root.right,n);
    }
    return root;
}

// 想要删除某个结点，首先要找到这个结点。在定位结点后，我们需要考虑以下情况：

// 结点不存在，定位到了空结点。直接返回即可。
// 需要删除的目标结点没有左孩子也没有右孩子——它是一个叶子结点，删掉它不会对其它结点造成任何影响，直接删除即可。
// 需要删除的目标结点存在左子树，那么就去左子树里寻找小于目标结点值的最大结点，用这个结点覆盖掉目标结点
// 需要删除的目标结点存在右子树，那么就去右子树里寻找大于目标结点值的最小结点，用这个结点覆盖掉目标结点
// 需要删除的目标结点既有左子树、又有右子树，这时就有两种做法了：要么取左子树中值最大的结点，要么取右子树中取值最小的结点。两个结点中任取一个覆盖掉目标结点，都可以维持二叉搜索树的数据有序性
const deleteNode = function(root,n){
    if(!root){
        return root;
    }
    if(root.val === n){
        if(!root.left && !root.right){
            root = null;
        }else if(root.left){
            const maxLeft = findMax(root.left);
            root.val = maxLeft.val;
            root.left = deleteNode(root.left,maxLeft.val);
        }else{
            const minRight = findMin(root.right)
            // 用这个 minRight 覆盖掉需要删除的当前结点  
            root.val = minRight.val
            // 覆盖动作会消耗掉原有的 minRight 结点
            root.right = deleteNode(root.right, minRight.val)
        }
    }else if(root.val>n){
        root.left = deleteNode(root.left, n)
    }else{
        root.right = deleteNode(root.right, n)
    }
    return root;
}
const findMax = function(root){
    while(root.right){
        root = root.right
    }
    return root;
}
const findMin = function(root){
    while(root.left){
        root = root.left;
    }
    return root;
}

// 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
let isValidBST = function (root) {
    function dfs(root, minValue, MaxValue) {
        if (!root) {
            return true;
        }
        if (root.val < minValue || root.val > maxValue) { return false }
        return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, MaxValue)
    }
    return dfs(root, -Infinity, Infinity);
}