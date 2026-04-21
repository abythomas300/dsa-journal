class Clip:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class Clipboard:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.max_length = None
        self.current_selected_clip = None

    def add_clip(self, data):
        # create a node
        new_node = Clip(data)
        
        # when max_length has already set (list is already capped)
        if self.max_length is not None and self.length+1 > self.max_length :

            if self.length == 1:
                self.head = new_node
                self.tail = new_node
                return True
            elif self.length == 2:
                self.head.next = None
                self.tail = self.head
                new_node.next = self.head
                self.head.prev = new_node
                self.length -= 1
            else:
                # deleting the last node
                current = self.tail.prev
                current.next = None
                self.tail = current
                self.length -= 1
                # appending new clip
                new_node.next = self.head
                self.head.prev = new_node

        else: 
        # when max_length is not set (list is not capped)
            if self.head is None: 
                self.tail = new_node
            else:
                new_node.next = self.head
                self.head.prev = new_node
                
        self.head = new_node
        self.tail.next = self.head
        self.head.prev = self.tail
        self.length += 1
        return True

    def view_clips(self):
        if self.length == 0:
            return []
        else:
            clips = []
            current = self.head
            count = 1
            while current is not self.tail:
                clips.append(current.data)
                current = current.next
                count += 1
            # appending tail node's data
            clips.append(current.data)
            count += 1
            return clips

    def paste(self, index):
        if self.length == 0:
            return []
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
            self.current_selected_clip = None
            return True
        else:
            return False

    def clear(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.current_selected_clip = None
        return True

    # method to go to next clip
    def next(self):
        if self.length == 0:
            return []
        else:
            # next command for the first time
            if self.current_selected_clip is None:
                self.current_selected_clip = self.head
                return self.current_selected_clip.data
            else:
                # next command not for the first time
                self.current_selected_clip = self.current_selected_clip.next
                return self.current_selected_clip.data

    # method to go to previous clip
    def prev(self):
        if self.length == 0:
            return []
        else:
            # prev command for the first time
            if self.current_selected_clip is None:
                self.current_selected_clip = self.head
                return self.current_selected_clip.data
            else:
                # prev command not for the first time
                self.current_selected_clip = self.current_selected_clip.prev
                return self.current_selected_clip.data
