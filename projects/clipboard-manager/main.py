from clipboard import Clipboard
import display
from rich.prompt import Prompt

def main():
    cb = Clipboard()
    
    # Show the initial header and commands
    display.show_header()
    display.show_commands()

    while True:
        user_input = Prompt.ask("\n[bold green]>[/]").strip().split()
        
        if not user_input:
            display.console.print("[dim] Clipboard is empty.[/]")
            continue
            
        cmd = user_input[0].lower()

        if cmd == "quit":
            display.console.print("Bye...")
            break

        elif cmd == "add":
            text = Prompt.ask("[blue]enter text[/]")
            cb.add_clip(text)
            display.console.print("[green]✔ clip added[/]")

        elif cmd == "view":
            all_clips = cb.view_clips() 
            display.show_table(all_clips)

        elif cmd == "paste" and len(user_input) > 1:
            index = int(user_input[1])
            content = cb.paste(index)
            if content is False:
                display.console.print("[red]invalid index.[/]")
            elif len(content) == 0:
                display.console.print("[dim] Clipboard is empty.[/]")
            else:
                display.console.print(f"📋 [bold blue]{content}[/]")
        
        elif cmd == "cap" and len(user_input) > 1:
            limit = int(user_input[1])
            result = cb.cap(limit)
            if result is False:
                display.console.print("[red]invalid cap limit.[/]")
            elif result is True:
                display.console.print(f"[green]✔ clipboard capped to limit {limit} [/]")
        
        elif cmd == "next" and len(user_input) == 1:
            content = cb.next()
            if content is False:
                display.console.print("[red]Cannot move forward. Already at the end of the list.[/]")
            elif len(content) == 0:
                display.console.print("[dim] Clipboard is empty.[/]")
            else:
                display.console.print(f"[bold blue]{content}[/]")

        elif cmd == "prev" and len(user_input) == 1:
            content = cb.prev()
            if content is False:
                display.console.print("[red]Cannot move backwards. Already at the beginning of the list.[/]")
            elif len(content) == 0:
                display.console.print("[dim] Clipboard is empty.[/]")
            else:
                display.console.print(f"[bold blue]{content}[/]")

        elif cmd == "reset":
            cb.clear()
            display.console.print(f"[green]✔ clipboard reset[/]")

if __name__ == "__main__":
    main()