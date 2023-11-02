    <!DOCTYPE html>
    <html>
    <body>
        <form action="/test" method="post">
            @csrf
            <input type="text" name="size[first][]" value="">
             <input type="text" name="size[second][]" value="">
              <input type="text" name="size[first][]" value="">
               <input type="text" name="size[second][]" value="">
            <input type="submit" value="button">
        </form>
    </body>
    </html>