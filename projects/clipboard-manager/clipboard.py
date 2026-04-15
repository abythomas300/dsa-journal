class Clip:
    def __init__(self, data):
        self.data = data
        self.next = None
        print(f"Test: Text node created with data ''{self.data}'' " ) # test

class Clipboard:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.max_length = None
        print("Test: Clipboard created") # test

    def add_clip(self, data):
        print("Test: Prepend function executed") # test

        # create a node
        new_node = Clip(data)
        
        # when max_length has already set 
        if self.max_length is not None and self.length+1 > self.max_length :
            print("Clipboard is full, deleting oldest clip...") # test

            # if list has only one element
            if self.length == 1:
                self.head = new_node
                self.tail = new_node
                return 
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
        print("Test: Text added to clipboard") # test

    def view_clips(self):
        print("Test: View clips function executed") # test
        # if list is empty: return None
        if self.length == 0:
            print("Clipboard is empty")
            return 
        else:
        # if list is not empty: store head's reference to 'current', print data, increment counter,  store next reference 
        # create 'current' variable to store reference to each node in list
            current = self.head
            count = 1
            while current is not None:
                print(f"{count}. {current.data}")
                current = current.next
                count += 1
            return

    def get_length(self):
        if self.length == 0:
            print("Clipboard is empty")
        else:
            print(f"There are {self.length} items in clipboard.")

    def paste(self, index):
        # if clipboard is empty: return message
        if self.length == 0:
            print("Clipboard is empty")
            return
        # if not empty: Traverse till that node and return data part
        elif index >=1 and index <= self.length:
            current = self.head
            currentIndex = 1
            while currentIndex < index:
                current = current.next
                currentIndex += 1

            print(current.data)
        else:
            print("Invalid selection")
            return None

    def cap(self, limit):
        # traverse till the limit index, assign None to current node's next pointer, assign current node as tail
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
            print(f"Clipboard capped at limit {self.max_length}")
            print("Updated clipboard:")
            clipboard.view_clips()
        else:
            print(f"Invalid cap limit.")

# test method invoke
# clipboard = Clipboard()
# clipboard.add_clip("Hello World!" )
# clipboard.add_clip("import insightface.py as face" )
# clipboard.add_clip("Jessica Jones S01E01" )
# clipboard.add_clip("I can't believe this happened")
# clipboard.view_clips()
# clipboard.add_clip("recent one")
# clipboard.view_clips()
# clipboard.get_length()
# clipboard.cap(4)
# clipboard.add_clip("finall")
# clipboard.get_length()
# clipboard.view_clips()
# clipboard.get_length()
# clipboard.add_clip("finallssss")
# clipboard.view_clips()
# clipboard.get_length()
# clipboard.cap(1)
# clipboard.paste(1)


