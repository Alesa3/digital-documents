import { Editor } from "@tinymce/tinymce-react";

interface EditFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleEditorChange: (
    content: React.SetStateAction<string>,
    editor: any
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function EditForm(props: EditFormProps) {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
    handleEditorChange,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-12 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full h-10 px-7 py-2 mb-4 text-s border border-gray-300 rounded-md"
      />
      <Editor
        apiKey="pj1o9u0f7oks50yep5f29ryf2ztizh5tmx4e8ism7xvfqto7"
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
            'backgroundcolor'
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | forecolor backcolor | help",
        }}
        onEditorChange={handleEditorChange}
      />
        <div className="mt-5 flex items-center justify-center text-rose-900">
        <button type="submit">Save</button>
        </div>
    </form>
  );
}
