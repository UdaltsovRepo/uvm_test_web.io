﻿NDSummary.OnToolTipsLoaded("File18:uvm_reg_adapter.svh",{35:"<div class=\"NDToolTip TSection LSystemVerilog\"><div class=\"TTSummary\">This section defines classes used to convert transaction streams between generic register address/data reads and writes and physical bus accesses.</div></div>",36:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype36\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_reg_adapter</div></div></div><div class=\"TTSummary\">This class defines an interface for converting between uvm_reg_bus_op and a specific bus transaction.</div></div>",37:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype37\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">function</span> new(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHString\">&quot;&quot;</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Create a new instance of this type, giving it the optional ~name~.</div></div>",38:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype38\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bit</span> supports_byte_enable</div></div><div class=\"TTSummary\">Set this bit in extensions of this class if the bus protocol supports byte enables.</div></div>",39:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype39\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bit</span> provides_responses</div></div><div class=\"TTSummary\">Set this bit in extensions of this class if the bus driver provides separate response items.</div></div>",40:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype40\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_sequence_base parent_sequence</div></div><div class=\"TTSummary\">Set this member in extensions of this class if the bus driver requires bus items be executed via a particular sequence base type. The sequence assigned to this member must implement do_clone().</div></div>",41:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype41\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">pure virtual function</span> uvm_sequence_item reg2bus(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_reg_bus_op&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">rw</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Extensions of this class ~must~ implement this method to convert the specified uvm_reg_bus_op to a corresponding uvm_sequence_item subtype that defines the bus transaction.</div></div>",42:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype42\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">pure virtual function void</span> bus2reg(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_sequence_item&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">bus_item,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">uvm_reg_bus_op&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">rw</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"4/1/5/5\" style=\"grid-area:2/5/3/6\">)</div></div></div></div><div class=\"TTSummary\">Extensions of this class ~must~ implement this method to copy members of the given bus-specific ~bus_item~ to corresponding members of the provided ~bus_rw~ instance. Unlike reg2bus, the resulting transaction is not allocated from scratch. This is to accommodate applications where the bus response must be returned in the original request.</div></div>",43:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype43\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual function</span> uvm_reg_item get_item()</div></div><div class=\"TTSummary\">Returns the bus-independent read/write information that corresponds to the generic bus transaction currently translated to a bus-specific transaction.&nbsp; This function returns a value reference only when called in the uvm_reg_adapter::reg2bus() method.&nbsp; It returns null at all other times.&nbsp; The content of the return uvm_reg_item instance must not be modified and used strictly to obtain additional information about the operation.</div></div>",44:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">The following example illustrates how to implement a RegModel-BUS adapter class for the APB bus protocol.</div></div>",45:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype45\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_tlm_adapter</div></div></div><div class=\"TTSummary\">For converting between uvm_reg_bus_op and uvm_tlm_gp items.</div></div>",47:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype47\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function</span> uvm_sequence_item reg2bus(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">const ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_reg_bus_op&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">rw</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)</div></div></div></div><div class=\"TTSummary\">Converts a uvm_reg_bus_op struct to a uvm_tlm_gp item.</div></div>",48:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">virtual function void</span> bus2reg(</div><div class=\"PType\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">uvm_sequence_item&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">bus_item,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">ref</span>&nbsp;</div><div class=\"PType\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">uvm_reg_bus_op&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">rw</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"4/1/5/5\" style=\"grid-area:2/5/3/6\">)</div></div></div></div><div class=\"TTSummary\">Converts a uvm_tlm_gp item to a uvm_reg_bus_op.&nbsp; into the provided ~rw~ transaction.</div></div>"});