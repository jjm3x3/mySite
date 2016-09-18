
if ARGV[0].nil?
  puts "you must provide a filename to generate a blogpost migration"
  exit
end

postContents = File.read(ARGV[0])
splitContents = postContents.split("\n")

readingCode = false
postTextContent = ""
codeSnippits = []
code = ""

splitContents.each do |para|
  if para.strip == "```" && !readingCode
    readingCode = true
  elsif para.strip == "```" && readingCode 
    readingCode = false
    codeSnippits << code
    postTextContent += "<code/>\\n"
    code = ""
  elsif readingCode
    code += para + "\n"
  elsif para != ""
    postTextContent += para.strip + "\\n"
  end
end

postTextContent = postTextContent.gsub("\"","\\\"")
puts postTextContent


if ARGV[1].nil?
  puts "with out providing a data it will asume todays date () is this alright? (Y/n)"
  exit
else
  date = ARGV[1]
end
migration = "db.post.insert({\"postBody\": \"#{postTextContent}\", \"codeSnippits\": #{codeSnippits},\"name\":\"Jacob Meixner\", \"date\":\"#{date}\"});"

File.write("newPostMigration.js", migration)

