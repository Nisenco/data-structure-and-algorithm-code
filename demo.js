// 1 两数求和问题
// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
var twoSum =function(ary,target){
	let result = {};
	let current ;
	ary.map((value,index)=>{
		if(result[target-value] !=undefined){
			return current = [result[target-value],index];
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
var merge = function(num1,m,num2,n){
	let i = m-1,j = n-1,k= m+n-1;
	while (i>=0 && j>=0){
		if(num1[i] >= num2[j]){
			num1[k] = num1[i];
			i--;
		}else {
			num1[k] = num2[j];
			j--;
		}
		k--;
	}
	while (j>=0){
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

var threeSum = (nums)=>{
	let res = [];
	// 数组排序
	nums = nums.sort((a,b)=> (a-b) );
	const len = nums.length;

	for(var i=0;i<len-2;i++){
		// 左指针
		let j = i+1;
		// 右指针
		let k = len-1;
		// 遇到重复数字  跳过
		if(i>0 && nums[i] === nums[i-1]){
			continue;
		}
		while (j<k) {
			if(nums[i] + nums[j] + num[k] <0){
				j++;
				// 处理左指针元素重复的情况
				while(j<k && nums[j] ===nums[j-1]){
					j++;
				}
			}else if(nums[i] + nums[j] + num[k] > 0){
				k--;
				// 处理指针元素重复的情况
				while(j<k && nums[k] ===nums[k+1]){
					k++;
				}
			}else{
				res.push([nums[i],nums[j],nums[k]]);
				j++;
				k--;
				// 处理左指针元素重复的情况
				while(j<k && nums[j] ===nums[j-1]){
					j++;
				}
				// 处理指针元素重复的情况
				while(j<k && nums[k] ===nums[k+1]){
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
    for(let i=0;i<len/2;i++) {
        if(str[i]!==str[len-i-1]) {
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

var validPalindrome = function(s){
	const len = s.length;
	let i=0,j = len-1;
	whild(i<j && s[i] === s[j]){
		i++;
		j--;
	}
	if(isPalindrome(i,j-1)){
		return true
	}
	if(isPalindrome(i+1,j)){
		return true;
	}
	function isPalindrome(st,ed){
		while(st<ed){
			if(s[st] !== s[ed]){
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

const WordDictionary = function(){
	this.words = {};
}
WordDictionary.prototype.addWord = function(word){
	if(this.words[word.length]){
		this.words[word.length].push(word);
	}else{
		this.words[word.length] = [word];
	}
};

wordDictionary.prototype.search = function(word){
	if(!this.words[word.length]){
		return false;
	}
	const le = word.length;
	if(!word.include('.')){
		return this.words[len].include(word);
	}
	const reg = new RegExp(word);
	return this.words[len].some((item)=>{
		return reg.test(item);
	});
}