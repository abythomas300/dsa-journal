class Clip:
    def __init__(self, data):
        self.data = data
        self.next = None

class Clipboard:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.max_length = None

    def add_clip(self, data):
        # create a node
        new_node = Clip(data)
        
        # when max_length has already set 
        if self.max_length is not None and self.length+1 > self.max_length :

            # if list has only one element
            if self.length == 1:
                self.head = new_node
                self.tail = new_node
                return True
            elif self.length == 2:
                self.head.next = None
                self.tail = self.head
                new_node.next = self.head
                self.head = new_node
                self.length -= 1
            else:
                current = self.head
                while current.next.next is not None:
                    current = current.next

                # deleting the last node
                current.next = None
                self.tail = current
                self.length -= 1
                # appending new clip
                new_node.next = self.head

        else: 
        # when max_length is not set
            if self.head is None: 
                self.tail = new_node
            else:
                new_node.next = self.head
                
        self.head = new_node
        self.length += 1
        return True

    def view_clips(self):
        # if list is empty
        if self.length == 0:
            return []
        else:
        # if list is not empty
            clips = []
            current = self.head
            count = 1
            while current is not None:
                clips.append(current.data)
                current = current.next
                count += 1
            return clips

    def get_length(self):
        if self.length == 0:
            return 0
        else:
            return self.length

    def paste(self, index):
        # if clipboard is empty: return message
        if self.length == 0:
            return []
        # if not empty: Traverse till that node and return data part
        elif index >=1 and index <= self.length:
            current = self.head
            currentIndex = 1
            while currentIndex < index:
                current = current.next
                currentIndex += 1
            return current.data
        else:
            return False

    def cap(self, limit):
        if limit >= 1 and limit <= self.length:
            current = self.head
            currentIndex = 1
            while currentIndex < limit:
                current = current.next
                currentIndex += 1
            current.next = None
            self.tail = current
            self.length = limit
            self.max_length = limit # set cap limit as clipboard's max_length
            return True
        else:
            print(f"Invalid cap limit.")
            return False

    def clear(self):
        self.head = None
        self.tail = None
        self.length = 0
        return True


