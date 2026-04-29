from rich.console import Console
from rich.panel import Panel
from rich.table import Table

console = Console()

def show_header():
    # Boxed title
    console.print(Panel("📋 [bold white]clipboard manager[/]", expand=False, border_style="bright_magenta"))

def show_commands():
    # Options display
    console.print("[dim]commands: [#DAA520]add[/#DAA520] | [#DAA520]view[/#DAA520] | [#DAA520]next[/#DAA520] | [#DAA520]prev[/#DAA520] | [#DAA520]paste[/#DAA520] | [#DAA520]reset[/#DAA520]  | [#DAA520]cap[/#DAA520] | [red]quit[/red]")

def show_table(clips):

    if len(clips) == 0:
        console.print("[dim]no clips yet. try [cyan]add[/]ing some!")
    else:
        table = Table(box=None, header_style="bold yellow", border_style="bright_magenta")
        table.add_column("#", justify="center", style="dim")
        table.add_column("CLIPBOARD")

        for i, content in enumerate(clips, 1):
            table.add_row(str(i), content)

        console.print(table)