# names = ["location", "start-date", "end-date",
#               "companion", "landmark", "notes"]
#
# output = ""
# names.each do |name|
#   output.concat "<p>#{name}: <span class='#{name}'></span></p>\n"
# end
#
# puts output


nameHash = { ".start-date" => "startDate", ".end-date" => "endDate", ".companions" => "companions", ".landmarks" => "landmarks", ".notes" => "notes" }


output = ""

nameHash.each do |name, camelName|
  output.concat "$('#{name}').text(newPlace.#{camelName});\n"
end

puts output
