import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sonner"
import { ActionPicker } from "@/user/ActionPicker"
import { ClientPicker } from "@/user/ClientPicker"
import { toast } from "sonner"
import { getUrl, getImportUrlScheme } from "@/class/core"

export default function App() {
  const [input, setInput] = useState("")
  const [action, setAction] = useState("rewrite")
  const [source, setSource] = useState("qx")
  const [target, setTarget] = useState("surge")
  const url = getUrl(input, source, target)
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="inline-flex flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="mt-2 text-4xl font-bold">Script Hub</h1>
          <Toaster />
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="textarea-message"
            placeholder="链接 / 配置"
            className="mt-2 h-[60vh] w-full"
          />
          <div className="mt-2 flex items-center gap-2">
            <ClientPicker
              value={source}
              onChange={setSource}
              disabled={action === "ruleset"}
            />
            <ClientPicker value={target} onChange={setTarget} />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <ActionPicker value={action} onChange={setAction} />
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                window.open(url)
              }}
            >
              预览
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                toast.success("拷贝成功", {
                  description: url,
                  position: "top-center",
                })
              }}
            >
              拷贝
            </Button>
            <Button
              disabled={action === "ruleset"}
              variant="outline"
              className="flex-1"
              onClick={() => {
                window.open(getImportUrlScheme(target, url))
              }}
            >
              导入
            </Button>
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
