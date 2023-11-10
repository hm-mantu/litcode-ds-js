import { Node } from './node.js'

export class LinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }

    /**
     * @description Adding a new node at the end
     * @param {*} value 
     * @returns 
     */
    push(value) {
        const node = new Node(value)
        if(!this.head) {
            this.head = node
            this.tail = node
            return this
        }
        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }

    /**
     * @description Pop the last element
     * @returns 
     */
    pop(){
        if(!this.head) {
            throw new Error('The list is empty, you can not do this operation')
        }
        let temp = this.head
        let pre = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    /**
     * @description returs the length of the linked list
     * @returns 
     */
    size(){
        return this.length
    }

    /**
     * @description This allows to add one item at the first of the Linkedlist
     * @param {*} value 
     * @returns 
     */
    unshift(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            return this
        } 
        node.next = this.head
        this.head = node
        this.length++
        return this
    }

    /**
     * @description removes the first item from the list
     * @returns 
     */
    shift() {
        if (!this.head) throw new Error('The list is empty, you can not do this operation')
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }   

    /**
     * @description get the item from the index
     * @param {*} index 
     * @returns 
     */
    get(index) {
        let temp = this.head
        if (index < 0 || index >= this.length) throw new Error('The index is not exist')
        for (let i = 0; i < index; i++) {
            temp = temp.next         
        }
        // temp.next = null
        return temp 
    }

    /**
     * @description set value at the particular index
     * @param {*} index 
     * @param {*} value 
     * @returns 
     */
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    /**
     * @description This insert the a new node a particular index
     * @param {*} index 
     * @param {*} value 
     * @returns 
     */
    insert(index, value) {
        if (index < 0 || index > this.length) throw new Error('Invalid index')
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        const node = new Node(value)
        const temp = this.get(index-1)
        node.next = temp.next
        temp.next = node
        this.length++
        return true
    }

    /**
     * @description Remove a node from an index
     * @param {*} index 
     * @returns 
     */
    remove(index) {
        if (index < 0 || index > this.length) throw new Error('Invalid index')
        if (index === 0) return this.shift()
        if (index === this.length-1) return this.pop()
        const before = this.get(index-1)
        const temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    /**
     * @description reverse the linkedlist
     * @returns 
     */
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let index = 0; index < this.length; index++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
}
