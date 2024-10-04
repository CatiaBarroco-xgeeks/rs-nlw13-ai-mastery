import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Slider } from "@/components/ui/slider";



export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload AI</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Developed with 💜 in Rocketseat NLW</span>
        <Separator orientation="vertical" className="h-6"/>
        <Button variant="outline">
          <Github className="w-4 h-4 mr-2"/>Github</Button>
      </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">

          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Includes the prompt for the AI..."
            />
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Result generated by AI..."
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Remember: you can use the <code className="text-violet-400">{"{transcription}"}</code> variable in your prompt to add the transcription content of the selected video.
          </p>

        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4"/>
              Select a video
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />
            <Separator/>

            <div className="space-y-2">
              <Label htmlFor="transcription prompt">Transcription prompt</Label>
              <Textarea 
                id="transcription_prompt" 
                className="h-20 leading-relaxed resize-none"
                placeholder="Include keywords mentioned in the video separated by a comma (,)"
              />
            </div> 

            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>

              <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="select a prompt..." />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">YouTube title</SelectItem>
                  <SelectItem value="description">YouTube description</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">You will soon be able to customize this option</span>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>

              <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">You will soon be able to customize this option</span>
            </div>

            <Separator/>

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />

              
              <span 
                className="block text-sm text-muted-foreground italic">
                  Higher values tend to make the result more creative and error-prone
              </span>
            </div>

            <Separator/>

            <Button type="submit" className="w-full">
              Submit
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>

          </form>

        </aside>

      </main>
    </div>
  )
}